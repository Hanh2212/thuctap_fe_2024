<template>
    <el-card class="card_body">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
        >
            <el-form-item label="Hình ảnh" prop="anhDaiDien">
                <el-upload
                    :file-list="fileListImg"
                    class="upload-demo"
                    :action="uploadProps.action"
                    :on-remove="handleRemoveImg"
                    :on-change="handlerChange"
                    list-type="picture-card"
                >
                    <el-icon><Plus /></el-icon>
                </el-upload>
            </el-form-item>

            <el-form-item label="Link quảng cáo" prop="linkQuangCao">
                <el-input v-model="ruleForm.linkQuangCao" />
            </el-form-item>

            <el-form-item label="Vị trí" prop="moTa">
                <el-select v-model="ruleForm.moTa" placeholder="Vui lòng chọn">
                    <el-option label="Bên phải" value="true" />
                    <el-option label="Bên trái" value="false" />
                </el-select>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    {{ route.params.id ? "Update" : "Create" }}
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import type {
    ComponentSize,
    FormInstance,
    FormRules,
    UploadFile,
    UploadProps,
    UploadUserFile,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { useUserStore } from "~/store";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { Advertisment, News } from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createAdvertisement,
    getbyIdAdvertisement,
    updateAdvertisement,
} from "~/services/advertisement.service";

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const useStore = useUserStore();
const token = useStore.user.token;
const route = useRoute();

const Notification = (
    message: string,
    type: "success" | "warning" | "error"
) => {
    ElMessage({
        message: message,
        type: type,
    });
};

const ruleForm = reactive<Advertisment>({
    anhDaiDien: "",
    linkQuangCao: "",
    moTa: "true",
});

const rules = reactive<FormRules>({
    linkQuangCao: [
        {
            required: true,
            message: "Vui lòng nhập link quảng cáo",
            trigger: "blur",
        },
    ],
    anhDaiDien: [
        {
            required: true,
            message: "Vui lòng chọn ảnh",
            trigger: "blur",
        },
    ],
    moTa: [
        {
            required: true,
            message: "Vui lòng chọn vị trí",
            trigger: "blur",
        },
    ],
});

const uploadProps = {
    name: "file",
    action: `${apiImage}/api-admin/Image/upload`,
    headers: {
        authorization: `Bearer ${token}`,
    },
};

const fileListImg = ref<UploadUserFile[]>([]);

const handlerChange = (file: UploadUserFile, fileList: UploadUserFile[]) => {
    fileListImg.value = fileList.slice(-1);
    ruleForm.anhDaiDien = "/img/" + fileListImg.value[0].name;
};

const handleRemoveImg: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
    ruleForm.anhDaiDien = "";
};

const fetchById = async (id: number) => {
    const resNewId = await getbyIdAdvertisement(id);
    ruleForm.anhDaiDien = resNewId?.anhDaiDien || "";
    ruleForm.linkQuangCao = resNewId?.linkQuangCao || "";
    ruleForm.moTa = resNewId?.moTa || "";

    fileListImg.value = [
        {
            name: resNewId.anhDaiDien,
            url: apiImage + resNewId.anhDaiDien,
        },
    ];
};

onMounted(() => {
    if (route.params.id) {
        fetchById(Number(route.params.id));
    }
});

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;

    try {
        const valid = await formEl.validate();
        if (valid) {
            if (route.params.id) {
                await updateAdvertisement({
                    Id: Number(route.params.id),
                    AnhDaiDien: ruleForm.anhDaiDien,
                    LinkQuangCao: ruleForm.linkQuangCao,
                    MoTa: ruleForm.moTa,
                });
                Notification("Cập nhật thành công", "success");
                router.push("/advertisement");
            } else {
                await createAdvertisement({
                    AnhDaiDien: ruleForm.anhDaiDien,
                    LinkQuangCao: ruleForm.linkQuangCao,
                    MoTa: ruleForm.moTa,
                });
                Notification("Thêm thành công", "success");
                router.push("/advertisement");
            }
        } else {
            Notification("Bạn cần điền đủ thông tin", "warning");
            console.log("error submit!");
        }
    } catch (fields) {
        Notification("Bạn cần điền đủ thông tin", "warning");
        console.log("error submit!", fields);
    }
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
    fileListImg.value = [];
};
</script>
