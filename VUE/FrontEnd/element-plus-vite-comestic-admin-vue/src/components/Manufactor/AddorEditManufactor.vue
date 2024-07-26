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
            <el-form-item label="Tên hãng" prop="tenHang">
                <el-input v-model="ruleForm.tenHang" />
            </el-form-item>

            <el-form-item label="Link web" prop="linkWeb">
                <el-input v-model="ruleForm.linkWeb" />
            </el-form-item>

            <el-form-item label="Ảnh hãng" prop="anhDaiDien">
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
    UploadProps,
    UploadUserFile,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { useUserStore } from "~/store";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { Manufactor, News } from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createManufactor,
    getbyIdManufactor,
    updateManufactor,
} from "~/services/manufactor.service";

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const useStore = useUserStore();
const token = useStore.user.token;
const route = useRoute();

const editor = ClassicEditor;

const Notification = (
    message: string,
    type: "success" | "warning" | "error"
) => {
    ElMessage({
        message: message,
        type: type,
    });
};

const ruleForm = reactive<Manufactor>({
    tenHang: "",
    linkWeb: "",
    anhDaiDien: "",
});

const rules = reactive<FormRules>({
    tenHang: [
        {
            required: true,
            message: "Vui lòng nhập tên hãng",
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
    linkWeb: [
        {
            required: true,
            message: "Vui lòng nhập link web",
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
    const resNewId = await getbyIdManufactor(id);
    ruleForm.tenHang = resNewId?.tenHang;
    ruleForm.anhDaiDien = resNewId?.anhDaiDien;
    ruleForm.linkWeb = resNewId?.linkWeb;

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
                await updateManufactor({
                    MaNhaSanXuat: Number(route.params.id),
                    TenHang: ruleForm.tenHang,
                    LinkWeb: ruleForm.linkWeb,
                    AnhDaiDien: ruleForm.anhDaiDien,
                });
                Notification("Cập nhật thành công", "success");
                router.push("/manufactor");
            } else {
                await createManufactor({
                    TenHang: ruleForm.tenHang,
                    LinkWeb: ruleForm.linkWeb,
                    AnhDaiDien: ruleForm.anhDaiDien,
                });
                Notification("Thêm thành công", "success");
                router.push("/manufactor");
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
