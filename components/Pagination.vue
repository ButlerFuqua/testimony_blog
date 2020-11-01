<template>
  <div class="container">
    <FlatButton
      :action="() => $nuxt.$emit('loadMoreTestimonies')"
      label="Load Moare"
    />
  </div>
</template>

<script>
import FlatButton from "./FlatButton";
export default {
  name: "Pagination",
  components: { FlatButton },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>