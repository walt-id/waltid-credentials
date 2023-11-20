<template>
  <div
    class="relative bg-slate-900 border-0.2 border-slate-600 mb-6 rounded-md"
  >
    <div v-if="filename" class="py-2 px-4">
      <span>
        {{ filename }}
      </span>
    </div>
    <div
      v-if="!showCheckIcon"
      @click="copyCodeAndShowCheckIcon"
      class="absolute top-3 right-4 hover:text-gray-50 cursor-pointer"
    >
      <ClipboardDocumentIcon class="h-4" />
    </div>
    <div
      v-if="showCheckIcon"
      class="absolute top-3 right-4 cursor-pointer text-primary-300"
    >
      <ClipboardDocumentCheckIcon class="h-4" />
    </div>
    <div
      :class="filename ? 'rounded-b-md' : 'rounded-md'"
      class="bg-slate-800 py-2.5 px-4 border border-0.2 border-slate-700 overflow-x-scroll text-sm"
    >
      <pre :class="$props.class"><slot /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ClipboardDocumentIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/vue/24/outline";
import { useClipboard } from "@vueuse/core";
import { ref } from "vue";

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
});

const { copy, copied, text } = useClipboard();
let showCheckIcon = ref();

const copyCodeAndShowCheckIcon = async () => {
  await copy(props.code);
  showCheckIcon.value = true;
  setTimeout(() => {
    showCheckIcon.value = false;
  }, 900);
};
</script>

<style>
pre code .line {
  display: block;
}

pre code .line:empty::before {
  content: "\200b";
}
</style>
