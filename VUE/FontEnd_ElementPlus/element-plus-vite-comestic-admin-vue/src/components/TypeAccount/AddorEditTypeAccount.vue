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
            <el-form-item label="Tên loại" prop="tenLoai">
                <el-input v-model="ruleForm.tenLoai" />
            </el-form-item>

            <el-form-item label="Mô tả" prop="moTa">
                <el-input v-model="ruleForm.moTa" />
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
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { Category, News, TypeAccount } from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createCategory,
    getbyIdCategory,
    updateCategory,
} from "~/services/category.service";
import {
    createTypeAccount,
    getbyIdTypeAccount,
    updateTypeAccount,
} from "~/services/typeaccount.service";

const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
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

const ruleForm = reactive<TypeAccount>({
    tenLoai: "",
    moTa: "",
});

const rules = reactive<FormRules>({
    tenLoai: [
        {
            required: true,
            message: "Vui lòng nhập tên loại tài khoản",
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

const fetchById = async (id: number) => {
    const resNewId = await getbyIdTypeAccount(id);
    ruleForm.tenLoai = resNewId.tenLoai;
    ruleForm.moTa = resNewId.moTa;
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
                await updateTypeAccount({
                    MaLoaitaikhoan: route.params.id,
                    TenLoai: ruleForm.tenLoai,
                    MoTa: ruleForm.moTa,
                });
                Notification("Cập nhật thành công", "success");
                router.push("/typeaccount");
            } else {
                await createTypeAccount({
                    TenLoai: ruleForm.tenLoai,
                    MoTa: ruleForm.moTa,
                });
                Notification("Thêm thành công", "success");
                router.push("/typeaccount");
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
};
</script>
