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
  background: #000;
  color: white;
  display: flex;
  padding: 0.5rem;

  h1 {
    font-size: 1.5rem;
  }

  @media (min-width: 801px) {
    // display: none;
  }
}
</style>