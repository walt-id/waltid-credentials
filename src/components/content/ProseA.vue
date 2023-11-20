<template>
    <NuxtLink :href="href" :target="target" class="underline underline-primary-300 hover:underline-primary-400 font-bold text-gray-50">
        <slot />
    </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
    href: {
        type: String,
        default: "",
    },
    target: {
        type: String,
        default: undefined,
        required: false,
    },
});
</script>
