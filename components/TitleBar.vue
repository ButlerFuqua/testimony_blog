<template>
  <div class="container">
    <button @click="openInfo">{{ open }}</button>
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
  background: #333;
  color: white;
  @media (min-width: 801px) {
    display: none;
  }
}
</style>