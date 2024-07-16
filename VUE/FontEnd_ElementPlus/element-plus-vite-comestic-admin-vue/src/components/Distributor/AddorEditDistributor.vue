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
            <el-form-item label="Tên nhà phân phối" prop="tenNhaPhanPhoi">
                <el-input v-model="ruleForm.tenNhaPhanPhoi" />
            </el-form-item>

            <el-form-item label="Địa chỉ" prop="diaChi">
                <el-input v-model="ruleForm.diaChi" />
            </el-form-item>

            <el-form-item label="Số điện thoại" prop="soDienThoai">
                <el-input v-model="ruleForm.soDienThoai" />
            </el-form-item>

            <el-form-item label="Link web" prop="linkWeb">
                <el-input v-model="ruleForm.linkWeb" />
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
import type {
    ComponentSize,
    FormInstance,
    FormRules,
} from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { Distributor, Manufactor, News } from "~/constant/api";
import { apiImage } from "~/constant/request";
import {
    createDistributor,
    getbyIdDistributor,
    updateDistributor,
} from "~/services/distributor.service";

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

const ruleForm = reactive<Distributor>({
    tenNhaPhanPhoi: "",
    diaChi: "",
    soDienThoai: "",
    linkWeb: "",
    moTa: "",
});

const rules = reactive<FormRules>({
    tenNhaPhanPhoi: [
        {
            required: true,
            message: "Vui lòng nhập tên nhà phân phối",
            trigger: "blur",
        },
    ],
    diaChi: [
        {
            required: true,
            message: "Vui lòng nhập địa chỉ",
            trigger: "blur",
        },
    ],
    soDienThoai: [
        {
            required: true,
            message: "Vui lòng nhập số điện thoại",
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
    moTa: [
        {
            required: true,
            message: "Vui lòng nhập mô tả",
            trigger: "blur",
        },
    ],
});

const fetchById = async (id: number) => {
    const resNewId = await getbyIdDistributor(id);
    ruleForm.tenNhaPhanPhoi = resNewId.tenNhaPhanPhoi;
    ruleForm.diaChi = resNewId.diaChi;
    ruleForm.soDienThoai = resNewId.soDienThoai;
    ruleForm.linkWeb = resNewId.linkWeb;
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
                await updateDistributor({
                    MaNhaPhanPhoi: route.params.id,
                    TenNhaPhanPhoi: ruleForm.tenNhaPhanPhoi,
                    DiaChi: ruleForm.diaChi,
                    SoDienThoai: ruleForm.soDienThoai,
                    LinkWeb: ruleForm.linkWeb,
                    MoTa: ruleForm.moTa,
                });
                Notification("Cập nhật thành công", "success");
                router.push("/distributor");
            } else {
                await createDistributor({
                    TenNhaPhanPhoi: ruleForm.tenNhaPhanPhoi,
                    DiaChi: ruleForm.diaChi,
                    SoDienThoai: ruleForm.soDienThoai,
                    LinkWeb: ruleForm.linkWeb,
                    MoTa: ruleForm.moTa,
                });
                Notification("Thêm thành công", "success");
                router.push("/distributor");
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
