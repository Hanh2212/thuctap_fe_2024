<template>
    <div class="container">
        <HeaderComponent title="Sản phẩm sale" />
        <div class="row" v-if="productSale">
            <div
                class="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-6 mb-4"
                v-for="product in productSale"
                :key="product.maSanPham"
            >
                <ItemProductHome :product="product" :isSale="true" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Product } from "~/constant/api";
import { getProductHome } from "~/services/home.service";
useHead({
    title: "Trang chủ",
});

const productSale = ref<Product[]>([]);

const { data, error } = await useAsyncData("productSale", () =>
    getProductHome({
        page: 1,
        pageSize: 6,
        Tendanhmucuudai: "FlagSale",
    })
);

if (data.value) {
    productSale.value = data.value?.data;
} else if (error.value) {
    console.error("Error while fetching products:", error.value);
}
</script>
