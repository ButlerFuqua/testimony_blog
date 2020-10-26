<template>
  <div class="container">
    <!-- <button @cligitck="openInfo">{{ open }}</button> -->
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: ["title", "open"],
  methods: {
    openInfo() {
      this.$nuxt.$emit(`open${this.open}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: sticky;
  z-index: 1;
  top: 0;
  background: #333;
  color: white;
  display: flex;
  @media (min-width: 801px) {
    display: none;
  }
}
</style>