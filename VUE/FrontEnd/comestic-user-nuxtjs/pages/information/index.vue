<template>
    <div class="container mt-5">
        <form @submit.prevent="handleUpdateInformation">
            <div class="mb-3">
                <label for="avatar" class="form-label">Avatar</label>
                <input
                    type="file"
                    class="form-control"
                    id="avatar"
                    @change="handleAvatarChange"
                />
                <img
                    v-if="fileList.length"
                    :src="fileList[0].url"
                    class="img-thumbnail mt-2"
                    alt="avatar"
                />
            </div>
            <div class="mb-3">
                <label for="hoTen" class="form-label">Họ tên</label>
                <input
                    type="text"
                    class="form-control"
                    id="hoTen"
                    v-model="formData.hoTen"
                />
            </div>
            <div class="mb-3">
                <label for="soDienThoai" class="form-label"
                    >Số điện thoại</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="soDienThoai"
                    v-model="formData.soDienThoai"
                />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="formData.email"
                />
            </div>
            <div class="mb-3">
                <label for="diaChi" class="form-label">Địa chỉ</label>
                <textarea
                    class="form-control"
                    id="diaChi"
                    v-model="formData.diaChi"
                ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Cập nhật</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import { getInformation } from "~/services/information.service";

const router = useRouter();
const fileList = ref([]);
const formData = reactive({
    hoTen: "",
    soDienThoai: "",
    email: "",
    diaChi: "",
});

const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            fileList.value = [{ url: e.target.result }];
        };
        reader.readAsDataURL(file);
    }
};

const fetchDataCart = async () => {
    const customerData = Cookies.get("customer");
    if (customerData) {
        try {
            const customer = JSON.parse(customerData);
            const dataUser = await getInformation(customer.mataikhoan);
            console.log(dataUser);
        } catch (error) {
            console.error("Failed to parse customer data from cookies:", error);
            Cookies.remove("customer");
            router.push("/login");
        }
    } else {
        router.push("/login");
    }
};

onMounted(async () => {
    fetchDataCart();
});

const handleUpdateInformation = () => {
    console.log("Cập nhật thông tin:", formData);
};
</script>

<style scoped>
.container {
    max-width: 600px;
}
.img-thumbnail {
    max-width: 150px;
    height: auto;
}
</style>
