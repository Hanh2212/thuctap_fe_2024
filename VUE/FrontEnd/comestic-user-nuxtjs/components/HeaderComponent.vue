<template>
    <h4 class="type">{{ title }}</h4>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>

<style lang="css" scoped>
.type {
    background: linear-gradient(90deg, var(--color-primary) 0%, #001815 100%) 0%
        0% no-repeat;
    padding: 10px;
    margin: 8px 0;
    color: #fff;
    text-transform: uppercase;
}
</style>
