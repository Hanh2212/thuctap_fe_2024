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
            <el-form-item label="Ảnh đại diện" prop="anhDaiDien">
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

            <el-form-item label="Tên tài khoản" prop="tenTaiKhoan">
                <el-input
                    v-model="ruleForm.tenTaiKhoan"
                    :disabled="route.params.id"
                />
            </el-form-item>

            <el-form-item label="Mật khẩu" prop="matKhau">
                <el-input v-model="ruleForm.matKhau" type="password" />
            </el-form-item>

            <el-form-item label="Họ tên" prop="hoTen">
                <el-input v-model="ruleForm.hoTen" />
            </el-form-item>

            <el-form-item label="Địa chỉ" prop="diaChi">
                <el-input v-model="ruleForm.diaChi" />
            </el-form-item>

            <el-form-item label="Email" prop="email">
                <el-input v-model="ruleForm.email" />
            </el-form-item>

            <el-form-item label="Số điện thoại" prop="soDienThoai">
                <el-input v-model="ruleForm.soDienThoai" />
            </el-form-item>

            <el-form-item label="Loại tài khoản" prop="maLoaitaikhoan">
                <el-select
                    v-model="ruleForm.maLoaitaikhoan"
                    filterable
                    placeholder="Vui lòng chọn"
                >
                    <el-option
                        v-for="item in optionsTypeAccount"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ElMessage } from "element-plus";
import router from "~/router";
import { useRoute } from "vue-router";
import { Account, FormAccount, News, OptionSelect } from "~/constant/api";
import { apiImage } from "~/constant/request";
import { createNew, getbyIdNews, updateNew } from "~/services/news.service";
import { getAllTypeAccount } from "~/services/typeaccount.service";
import {
    checkUserNameIsEmpty,
    createAccount,
    getDetailAccount,
    updateAccount,
} from "~/services/account.service";

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

const ruleForm = reactive<FormAccount>({
    tenTaiKhoan: "",
    email: "",
    hoTen: "",
    matKhau: "",
    diaChi: "",
    soDienThoai: "",
    maLoaitaikhoan: 1,
    anhDaiDien: "",
});

const rules = reactive<FormRules>({
    tenTaiKhoan: [
        {
            required: true,
            message: "Vui lòng nhập tên tài khoản",
            trigger: "blur",
        },
    ],
    email: [
        {
            required: true,
            message: "Vui lòng nhập email",
            trigger: "blur",
        },
    ],
    hoTen: [
        {
            required: true,
            message: "Vui lòng nhập họ tên",
            trigger: "blur",
        },
    ],
    matKhau: [
        {
            required: true,
            message: "Vui lòng nhập mật khẩu",
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
    maLoaitaikhoan: [
        {
            required: true,
            message: "Vui lòng chọn loại tài khoản",
            trigger: "blur",
        },
    ],
    anhDaiDien: [
        {
            required: true,
            message: "Vui lòng chọn ảnh đại diện",
            trigger: "blur",
        },
    ],
});

const optionsTypeAccount = ref<OptionSelect[]>();

async function fetchCategory() {
    const res = await getAllTypeAccount();
    ruleForm.maLoaitaikhoan = Number(res[0].maLoaitaikhoan);
    optionsTypeAccount.value = res.map(function (value: any) {
        return {
            value: value.maLoaitaikhoan,
            label: value.tenLoai,
        };
    });
}

onMounted(() => {
    fetchCategory();
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
    const resNewId = await getDetailAccount(id);
    ruleForm.tenTaiKhoan = resNewId[0].tenTaiKhoan;
    ruleForm.email = resNewId[0].email;
    ruleForm.hoTen = resNewId[0].hoTen;
    ruleForm.matKhau = resNewId[0].matKhau;
    ruleForm.diaChi = resNewId[0].diaChi;
    ruleForm.soDienThoai = resNewId[0].soDienThoai;
    ruleForm.maLoaitaikhoan = Number(resNewId[0].maLoaitaikhoan);
    ruleForm.anhDaiDien = resNewId[0].anhDaiDien;
    ruleForm.maChitietTaiKhoan = resNewId[0].maChitietTaiKhoan;

    fileListImg.value = [
        {
            name: resNewId[0].anhDaiDien,
            url: apiImage + resNewId[0].anhDaiDien,
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
                await updateAccount({
                    MaTaiKhoan: route.params.id,
                    MatKhau: ruleForm.matKhau,
                    Email: ruleForm.email,
                    list_json_chitiet_taikhoan: [
                        {
                            MaChitietTaiKhoan: ruleForm.maChitietTaiKhoan,
                            MaLoaitaikhoan: ruleForm.maLoaitaikhoan,
                            AnhDaiDien: ruleForm.anhDaiDien,
                            HoTen: ruleForm.hoTen,
                            DiaChi: ruleForm.diaChi,
                            SoDienThoai: ruleForm.soDienThoai,
                            status: 2,
                        },
                    ],
                });
                Notification("Cập nhật thành công", "success");
                router.push("/account");
            } else {
                const resCheckUser = await checkUserNameIsEmpty();
                const userEmpty = resCheckUser.map(
                    (value: Account) => value.tenTaiKhoan
                );
                if (userEmpty.includes(ruleForm.tenTaiKhoan)) {
                    Notification("Tài khoản đã tồn tại", "error");
                } else {
                    await createAccount({
                        TenTaiKhoan: ruleForm.tenTaiKhoan,
                        MatKhau: ruleForm.matKhau,
                        Email: ruleForm.email,
                        list_json_chitiet_taikhoan: [
                            {
                                MaLoaitaikhoan: ruleForm.maLoaitaikhoan,
                                AnhDaiDien: ruleForm.anhDaiDien,
                                HoTen: ruleForm.hoTen,
                                DiaChi: ruleForm.diaChi,
                                SoDienThoai: ruleForm.soDienThoai,
                            },
                        ],
                    });
                    Notification("Thêm thành công", "success");
                    router.push("/account");
                }
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
