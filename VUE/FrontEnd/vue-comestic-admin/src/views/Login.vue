<template>
    <a-card title="Login Admin" class="login-card">
        <a-form :model="formState" @submit="handleSubmit" layout="vertical">
            <a-form-item
                label="Tài khoản"
                :validate-status="username.validateStatus"
                :help="username.errorMsg"
            >
                <a-input
                    v-model:value="formState.username"
                    placeholder="Vui lòng nhập tài khoản"
                    type="text"
                />
            </a-form-item>

            <a-form-item
                label="Mật khẩu"
                :validate-status="password.validateStatus"
                :help="password.errorMsg"
            >
                <a-input
                    v-model:value="formState.password"
                    placeholder="Vui lòng nhập mật khẩu"
                    type="password"
                />
            </a-form-item>

            <a-form-item>
                <a-button
                    type="primary"
                    html-type="submit"
                    block
                    :loading="loading"
                    >Login</a-button
                >
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { ref, reactive, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { notification } from "ant-design-vue";
import { login } from "@/services/login.service";

const openNotificationWithIcon = (
    type: string,
    mes: string,
    descrip: string
) => {
    notification[type]({
        message: mes,
        description: descrip,
    });
};

const formState = reactive({
    username: "",
    password: "",
});

const username = ref({
    validateStatus: "",
    errorMsg: "",
});

const password = ref({
    validateStatus: "",
    errorMsg: "",
});

const loading = ref(false);
const store = useStore();
const router = useRouter();

onBeforeMount(() => {
    store.commit("setUser", null);
});

const validateForm = () => {
    let isValid = true;
    if (!formState.username) {
        username.value.validateStatus = "error";
        username.value.errorMsg = "Vui lòng nhập tài khoản";
        isValid = false;
    } else {
        username.value.validateStatus = "";
        username.value.errorMsg = "";
    }

    if (!formState.password) {
        password.value.validateStatus = "error";
        password.value.errorMsg = "Vui lòng nhập mật khẩu";
        isValid = false;
    } else {
        password.value.validateStatus = "";
        password.value.errorMsg = "";
    }

    return isValid;
};

const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (validateForm()) {
        loading.value = true;
        try {
            setTimeout(async function () {
                try {
                    const res = await login({
                        username: formState.username,
                        password: formState.password,
                    });
                    if (res.maLoaitaikhoan === 1 || res.maLoaitaikhoan === 8) {
                        loading.value = false;
                        store.dispatch("fetchUser", res);
                        router.push("/");
                        openNotificationWithIcon(
                            "success",
                            "Đăng nhập thành công",
                            `Xin chào, ${res.hoten}`
                        );
                    } else {
                        openNotificationWithIcon(
                            "warning",
                            "Tài khoản khách hàng không thể vào đây!",
                            ""
                        );
                        loading.value = false;
                    }
                } catch (error) {
                    openNotificationWithIcon(
                        "warning",
                        "Tài khoản hoặc mật khẩu không chính xác!",
                        ""
                    );
                    loading.value = false;
                }
            }, 1000);
            // console.log("Form submitted:", formState);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }
};
</script>

<style scoped>
.login-card {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
}
</style>
