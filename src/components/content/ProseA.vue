<template>
    <NuxtLink :href="href" :target="target" class="underline bg-gray-800 hover:bg-gray-600">
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
