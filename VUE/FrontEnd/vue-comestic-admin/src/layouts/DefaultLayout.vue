<template>
    <div>
        <Header />
        <div class="row">
            <div :class="['col-md-3', { 'col-md-1': !isSidebarOpen }]">
                <button
                    class="btn btn-primary"
                    type="button"
                    @click="toggleSidebar"
                >
                    BTN
                </button>
                <div :class="['collapse', { show: isSidebarOpen }]">
                    <AppNavbar />
                </div>
            </div>
            <div :class="['col-md-9', { 'col-md-11': !isSidebarOpen }]">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";

export default {
    name: "DefaultLayout",
    components: {
        AppNavbar,
        Header,
    },
    data() {
        return {
            isSidebarOpen: true,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
};
</script>

<style scoped>
.collapse.show {
    display: block !important;
}
</style>
