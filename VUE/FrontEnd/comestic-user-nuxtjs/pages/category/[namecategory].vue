<template>
    <div class="container">
        <div class="type">
            <NuxtLink to="/">TRANG CHỦ</NuxtLink>
            <i class="fa-solid fa-arrow-right"></i>
            <NuxtLink :to="`/category/${name}`">{{ name }}</NuxtLink>
        </div>
        <div class="row">
            <div
                class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-4"
                v-for="product in products"
                :key="product.maSanPham"
            >
                <item-product-home :product="product" :isSale="false" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { type Product } from "~/constant/api";
import { getProductCategory } from "~/services/category.service";

const route = useRoute();
const name = route.params.namecategory;

const products = ref<Product[]>([]);

const { data: data, error: er } = await useAsyncData("product", () =>
    getProductCategory({
        page: 1,
        pageSize: 12,
        TenDanhMuc: name,
    })
);

if (data.value) {
    products.value = data.value?.data;
    console.log(products.value);
} else if (er.value) {
    console.error("Error while fetching products:", er.value);
}
</script>
<style lang="css" scoped>
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
