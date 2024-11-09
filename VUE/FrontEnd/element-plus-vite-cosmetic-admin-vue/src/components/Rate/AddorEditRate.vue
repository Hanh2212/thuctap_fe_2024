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
            <el-form-item label="Ghi chú" prop="ghiChu">
                <el-input v-model="ruleForm.ghiChu" :rows="4" type="textarea" />
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
import { ElMessage } from "element-plus";
import { useRoute } from "vue-router";
import { Rate } from "~/constant/api";
import { editRate, getbyIdRate } from "~/services/rate.service";
import router from "~/router";

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

const ruleForm = reactive<Rate>({
    ghiChu: "",
});

const rules = reactive<FormRules>({
    ghiChu: [
        {
            required: true,
            message: "Vui lòng nhập tiêu đề",
            trigger: "blur",
        },
    ],
});

const fetchById = async (id: number) => {
    const resDetaiRate = await getbyIdRate(id);
    ruleForm.ghiChu = resDetaiRate?.ghiChu;
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
                await editRate({
                    MaDanhGia: Number(route.params.id),
                    GhiChu: ruleForm.ghiChu,
                    AnhDanhGia: "",
                    NoiDung: "",
                });
                Notification("Cập nhật thành công", "success");
                router.push("/rate");
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
