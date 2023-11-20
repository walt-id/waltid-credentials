<template>
  <ul class="mt-5" ref="ul">
    <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
      <TocElement
        v-if="data"
        v-for="element in getTableOfContents(data)"
        :toc-element="element"
        :key="element.id"
        class="table-of-contents-element"
      />
    </ContentQuery>
  </ul>
</template>

<script setup lang="ts">
import TocElement from "~/components/tableOfContents/TocElement.vue";

interface Element {
  type: string;
  tag: string;
  props: {
    id: string;
  };
  children: Child[];
}

interface Child {
  type: string;
  value?: string;
}

interface TableOfContentsElement {
  tag: string;
  id: string;
  value: string;
}

function getTableOfContents(data: any) {
  const contentChildren = data?.body?.children;
  const filteredContent = contentChildren?.filter((child: any) => {
    const tagsToFilter = ["h2", "h3", "h4", "h5", "h6"];
    if (tagsToFilter.includes(child.tag)) {
      if (child.children.length > 0) {
        return true;
      }
    }
  });
  const tableOfContents: TableOfContentsElement[] = filteredContent.map(
    (content: Element) => ({
      tag: content.tag,
      id: content.props.id,
      value: content.children[0].value,
    })
  );
  return tableOfContents;
}
</script>
