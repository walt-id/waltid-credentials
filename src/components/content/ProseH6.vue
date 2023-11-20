<template>
  <h6
    :id="id"
    class="font-semibold mb-1 mt-10 text-gray-50"
    @pointerenter="showHashtag = true"
    @pointerleave="showHashtag = false"
    @click.prevent="handleClick"
  >
    <span v-if="showHashtag" class="absolute left-[-2px] text-primary-300"
      >#</span
    >
    <a v-if="id && generate" :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h6>
</template>

<script setup lang="ts">
import { computed, ref, useRuntimeConfig } from "#imports";
import { scroll } from "~/lib/navHelper/scroll";

const route = useRoute();
const showHashtag = ref(false);

const props = defineProps<{ id?: string }>();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(() => props.id && headings?.anchorLinks?.h6);
function handleClick() {
  if (props.id) {
    scroll(props.id, route.path);
  }
}
</script>
