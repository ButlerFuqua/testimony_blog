<template>
  <div>
    <h1 class="headline">{{ title }}</h1>
    <p v-if="subTitle">
      {{ subTitle }}
    </p>
    <p v-if="body">
      {{ body }}
    </p>
    <v-divider class="mb-4 mt-2"></v-divider>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: ["title", "subTitle", "body"],
};
</script>