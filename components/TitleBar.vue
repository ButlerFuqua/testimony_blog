<template>
  <div class="container">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <button v-if="!hideGospelBtn" @click="$router.push('/gospel')">
      Gospel
    </button>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: ["title", "open", "hideGospelBtn"],
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
  align-items: center;

  div {
    width: 100%;
    max-width: 900px;
    margin: auto;
  }

  h1 {
    font-size: 1.5rem;
    margin: 0;
  }

  @media (min-width: 801px) {
    // display: none;
  }

  button {
    background: none;
    color: white;
    border: 2px solid white;
    border-radius: 50%;
    padding: 0.5rem;
  }
}
</style>