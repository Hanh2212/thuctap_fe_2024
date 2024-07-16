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
            <el-form-item label="Danh mục ưu đãi" prop="tenDanhMuc">
                <el-input v-model="ruleForm.tendanhmucuudai" />
            </el-form-item>

            <el-form-item label="Trạng thái" prop="dacBiet">
                <el-select
                    v-model="ruleForm.dacBiet"
                    placeholder="Vui lòng chọn"
                >
                    <el-option label="Hoạt động" :value="true" />
                    <el-option label="Tắt" :value="false" />
                </el-select>
            </el-form-item>

            <el-form-item label="Mô tả" prop="noiDung">
                <el-input v-model="ruleForm.noiDung" />
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
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { Category, CategoryOffer, News } from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createCategoryOffer,
    getbyIdCategoryOffer,
    updateCategoryOffer,
} from "~/services/categoryoffer.service";

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

const ruleForm = reactive<CategoryOffer>({
    tendanhmucuudai: "",
    dacBiet: true,
    noiDung: "",
});

const rules = reactive<FormRules>({
    tendanhmucuudai: [
        {
            required: true,
            message: "Vui lòng nhập tên danh mục ưu đãi",
            trigger: "blur",
        },
    ],
    dacBiet: [
        {
            required: true,
            message: "Vui lòng chọn trạng thái",
            trigger: "blur",
        },
    ],
    noiDung: [
        {
            required: true,
            message: "Vui lòng nhập mô tả",
            trigger: "blur",
        },
    ],
});

const fetchById = async (id: number) => {
    const resNewId = await getbyIdCategoryOffer(id);
    ruleForm.tendanhmucuudai = resNewId.tendanhmucuudai;
    ruleForm.dacBiet = resNewId.dacBiet;
    ruleForm.noiDung = resNewId.noiDung;
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
                await updateCategoryOffer({
                    Madanhmucuudai: route.params.id,
                    Tendanhmucuudai: ruleForm.tendanhmucuudai,
                    DacBiet: ruleForm.dacBiet,
                    NoiDung: ruleForm.noiDung,
                });
                Notification("Cập nhật thành công", "success");
                router.push("/categoryoffer");
            } else {
                await createCategoryOffer({
                    Tendanhmucuudai: ruleForm.tendanhmucuudai,
                    DacBiet: ruleForm.dacBiet,
                    NoiDung: ruleForm.noiDung,
                });
                Notification("Thêm thành công", "success");
                router.push("/categoryoffer");
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
