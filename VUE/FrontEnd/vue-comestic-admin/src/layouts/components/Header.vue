<template>
    <a-flex
        class="header_section"
        gap="middle"
        justify="flex-end"
        align="center"
    >
        <div class="icon-container">
            <i class="fa-solid fa-bell"></i>
        </div>
        <div class="icon-container">
            <i class="fa-solid fa-message"></i>
        </div>
        <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" :title="info.name" @click.prevent>
                <img
                    :src="info.avt"
                    alt="Avatar"
                    width="35"
                    height="35"
                    :style="{ borderRadius: '50%' }"
                />
                <!-- <DownOutlined /> -->
            </a>
            <template #overlay>
                <a-menu>
                    <a-menu-item>
                        <a class="dropdown-item" href="#">Profile</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a class="dropdown-item" href="#">Settings</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a class="dropdown-item" href="/login">Logout</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
    </a-flex>
</template>

<script setup lang="ts">
interface User {
    anhdaidien: string;
    hoten: string;
}

import avatar from "@/assets/logo.jpg";
import { computed } from "vue";
import { apiImage } from "@/constant/api";
import { useStore } from "vuex";

const store = useStore();

const user = computed<User>(() => store.state.user);

const info = computed(() => {
    return {
        avt: apiImage + user.value.anhdaidien,
        name: user.value.hoten,
    };
});
</script>

<style lang="scss" scoped>
.header_section {
    height: 8vh;
    background-color: #1e293b;
    position: sticky;
    top: 0;
    right: 0;
    padding: 0 20px;
    z-index: 999;
}

.icon-container {
    margin: 0 10px;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}

.avatar img {
    border: 2px solid white;
}
</style>
