<template>
  <div class="container">
    <!-- <button @cligitck="openInfo">{{ open }}</button> -->
    <div>
      <h1>{{ title }}</h1>
    </div>
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

  div {
    width: 100%;
    max-width: 900px;
    margin: auto;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media (min-width: 801px) {
    // display: none;
  }
}
</style>