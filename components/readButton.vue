<template>
  <v-btn
    @click="$router.push(path)"
    outlined
    color="teal darken-2"
    aria-label="back"
    >{{ text || "Read" }}</v-btn
  >
</template>
<script>
export default {
  name: "ReadButton",
  props: ["path", "text"],
};
</script>