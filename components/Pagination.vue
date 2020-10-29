<template>
  <div class="container">
    <button @click="$nuxt.$emit('loadMoreTestimonies')">Load More</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      testimoniesPerPage: 5,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>