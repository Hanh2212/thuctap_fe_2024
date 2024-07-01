<template>
    <div>
        <AppNavbar />
        <router-view />
    </div>
</template>

<script>
import AppNavbar from "../components/Navbar.vue";

export default {
    name: "DefaultLayout",
    components: {
        AppNavbar,
    },
};
</script>
