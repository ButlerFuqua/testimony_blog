<template>
  <div class="container">
    <button>Previous</button>
    <button>1</button>
    <button>Next</button>
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
}
</style>