<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="subTitle">
      {{ subTitle }}
    </p>
    <p v-if="body">
      {{ body }}
    </p>
    <v-divider class="mb-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: "PageHeading",
  props: ["title", "subTitle", "body"],
};
</script>