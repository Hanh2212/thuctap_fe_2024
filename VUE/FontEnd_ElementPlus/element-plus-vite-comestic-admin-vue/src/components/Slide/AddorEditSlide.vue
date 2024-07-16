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
            <el-form-item label="Tiêu đề" prop="tieuDe">
                <el-input v-model="ruleForm.tieuDe" />
            </el-form-item>

            <el-form-item label="Mô tả" prop="moTa">
                <el-input v-model="ruleForm.moTa" />
            </el-form-item>

            <el-form-item label="Ảnh sản phẩm" prop="linkAnh">
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
    UploadFile,
    UploadProps,
    UploadUserFile,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { useUserStore } from "~/store";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { News, Slide } from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createBannerSlide,
    getbyIdSlide,
    updateBannerSlide,
} from "~/services/slide.service";

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

const ruleForm = reactive<Slide>({
    tieuDe: "",
    linkAnh: "",
    moTa: "",
});

const rules = reactive<FormRules>({
    tieuDe: [
        {
            required: true,
            message: "Vui lòng nhập tiêu đề",
            trigger: "blur",
        },
    ],
    linkAnh: [
        {
            required: true,
            message: "Vui lòng chọn ảnh",
            trigger: "blur",
        },
    ],
    moTa: [
        {
            required: true,
            message: "Vui lòng nhập mô tả",
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
    ruleForm.linkAnh = "/img/" + fileListImg.value[0].name;
};

const handleRemoveImg: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
    ruleForm.linkAnh = "";
};

const fetchById = async (id: number) => {
    const resNewId = await getbyIdSlide(id);
    ruleForm.tieuDe = resNewId.tieuDe;
    ruleForm.linkAnh = resNewId.linkAnh;
    ruleForm.moTa = resNewId.moTa;

    fileListImg.value = [
        {
            name: resNewId.linkAnh,
            url: apiImage + resNewId.linkAnh,
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
                await updateBannerSlide({
                    MaAnh: route.params.id,
                    LinkAnh: ruleForm.linkAnh,
                    TieuDe: ruleForm.tieuDe,
                    MoTa: ruleForm.moTa,
                });
                Notification("Cập nhật thành công", "success");
                router.push("/slide");
            } else {
                await createBannerSlide({
                    LinkAnh: ruleForm.linkAnh,
                    TieuDe: ruleForm.tieuDe,
                    MoTa: ruleForm.moTa,
                });
                Notification("Thêm thành công", "success");
                router.push("/slide");
            }
        } else {
            Notification("Bạn cần điền đủ thông tin", "warning");
        }
    } catch (fields) {
        Notification("Bạn cần điền đủ thông tin", "warning");
    }
};

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
    fileListImg.value = [];
};
</script>
