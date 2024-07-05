<template>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :breadcrumb="{ routes: breadcrumbRoutes }"
    />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const breadcrumbRoutes = ref([
    {
        path: "/",
        breadcrumbName: "Home",
    },
]);

const updateBreadcrumb = () => {
    const matchedRoutes = route.matched;
    const newRoutes = matchedRoutes.map((routeRecord: any) => ({
        path: routeRecord.path,
        breadcrumbName: routeRecord.meta.breadcrumbName || routeRecord.name,
    }));
    breadcrumbRoutes.value = newRoutes;
};

watch(route, updateBreadcrumb, { immediate: true });

updateBreadcrumb();

</script>

<style lang="scss">
:where(.css-dev-only-do-not-override-19iuou).ant-breadcrumb ol {
    align-items: flex-end;
}
</style>
