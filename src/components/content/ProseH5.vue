<template>
    <h5 :id="id" class="font-semibold text-lg mb-2">
        <a v-if="id && generate" :href="`#${id}`">
            <slot />
        </a>
        <slot v-else />
    </h5>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from "#imports";

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h5);
</script>
