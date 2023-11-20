<template>
  <li
    :class="marginClass"
    class="text-sm my-2 cursor-pointer hover:text-primary-300"
    @click="scroll(tocElement.id, $route.path)"
  >
    <component :is="tocElement.tag" :id="tocElement.id"
      >{{ tocElement.value }}
    </component>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { scroll } from "~/lib/navHelper/scroll";

interface TableOfContentsElement {
  tag: string;
  id: string;
  value: string;
}

const props = defineProps<{
  tocElement: TableOfContentsElement;
}>();

const { tocElement } = props;
const route = useRoute();

const marginClasses: Record<string, string> = {
  h2: "ml-0",
  h3: "ml-1.5",
  h4: "ml-3",
  h5: "ml-6",
  h6: "ml-6",
};

const marginClass = computed(() => marginClasses[tocElement.tag]);
</script>
