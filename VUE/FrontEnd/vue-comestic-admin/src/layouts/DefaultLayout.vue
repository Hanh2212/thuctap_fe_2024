<template>
    <div class="app">
        <Sidebar @update:isExpanded="handleSidebarToggle" />
        <div
            class="content"
            :style="{
                width: isExpanded ? 'calc(100% - 264px)' : 'calc(100% - 64px)',
            }"
        >
            <Header />
            <PageHeader />
            <router-view class="content_layout" />
        </div>
    </div>
</template>

<script setup>
import Sidebar from "@/layouts/components/Sidebar.vue";
import Header from "@/layouts/components/Header.vue";
import PageHeader from "@/layouts/components/PageHeader.vue";
import { ref } from "vue";

const isExpanded = ref(false);

const handleSidebarToggle = (expanded) => {
    isExpanded.value = expanded;
};
</script>

<style lang="scss">
:root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

body {
    background: var(--light);
}

*::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background-color: #f5f5f5;
    border-radius: 0 15px 15px 0;
}

*::-webkit-scrollbar-thumb {
    background-color: #4444;
    border-radius: 5px;
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

.app {
    display: flex;
    .content_layout {
        padding: 1rem;
        width: 100%;
        height: 82.5vh;
        overflow: auto;
        background-color: #fff;
    }
}

.content {
    width: calc(100% - 64px);
    height: 100vh;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    // @media (max-width: 1024px) {
    //     padding-left: 4rem;
    // }
}

.fa-pen-to-square{
    cursor: pointer;
}
</style>
