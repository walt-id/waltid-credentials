<template>
  <h1
    :id="id"
    class="relative font-semibold text-4xl mb-10 text-gray-50 cursor-pointer"
    @pointerenter="showHashtag = true"
    @pointerleave="showHashtag = false"
    @click.prevent="handleClick"
  >
    <span v-if="showHashtag" class="absolute left-[-32px] text-primary-300"
      >#</span
    >
    <a v-if="generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig, ref } from "#imports";
import { scroll } from "~/lib/navHelper/scroll";

const route = useRoute();
const showHashtag = ref(false);
const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h1);

function handleClick() {
  if (props.id) {
    scroll(props.id, route.path);
  }
}
</script>
