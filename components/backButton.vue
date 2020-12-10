<template>
  <div class="text-center">
    <v-btn
      style="margin: 1rem auto"
      @click="$router.push(path)"
      outlined
      color="teal darken-2"
      aria-label="back"
      >{{ text || "Back" }}</v-btn
    >
  </div>
</template>
<script>
export default {
  name: "BackButton",
  props: ["path", "text"],
};
</script>