<template>
    <div class="container">
        <div class="type">
            <NuxtLink to="/">TRANG CHỦ</NuxtLink>
            <i class="fa-solid fa-arrow-right"></i>
            <NuxtLink to="/cart">Giỏ Hàng</NuxtLink>
            <i class="fa-solid fa-arrow-right"></i>
            <NuxtLink to="/order">Đặt Hàng</NuxtLink>
        </div>

        <item-cart
            :dataCart="dataCart"
            :fetch="fetchDataCart"
            :totalPrice="totalPrice"
            :order="true"
        />
    </div>
</template>

<script setup lang="ts">
import Cookies from "js-cookie";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { type Product, type Cart } from "~/constant/api";
import { getGioHangByIdTaiKhoan } from "~/services/cart.service";

const router = useRouter();

const dataCart = ref<Cart[]>([]);
const totalPrice = ref(0);

const fetchDataCart = async () => {
    const customerData = Cookies.get("customer");
    if (customerData) {
        try {
            const customer = JSON.parse(customerData);
            const dataTemp = await getGioHangByIdTaiKhoan(customer.mataikhoan);
            const dataBuy = dataTemp.filter(
                (value) => value.trangThai === true
            );
            dataCart.value = dataBuy;
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
</script>

<style scoped lang="css">
.type {
    background: linear-gradient(90deg, var(--color-primary) 0%, #001815 100%) 0%
        0% no-repeat;
    padding: 10px;
    color: #fff;
    margin-top: 10px;
}

.type a {
    text-decoration: none;
    color: #ddd;
    font-size: 14px;
    text-transform: uppercase;
}

.type i {
    color: #fff;
    font-size: 10px;
    padding: 0 10px;
}
</style>
