<template>
  <div class="container">
    <div class="buttonRow">
      <button v-if="open" @click="openInfo">Info</button>
      <button @click="$nuxt.$emit('showTestinmonySearch')">Search</button>
      <button @click="$router.push('/')">Home</button>
      <button @click="$nuxt.$emit('showPageMenu')">Pages</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  props: ["open"],
  methods: {
    openInfo() {
      this.$nuxt.$emit(`open${this.open}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  bottom: 0;
  background: #fff;
  left: 0;
  width: 100%;
  border: 1px solid #777;
}
.buttonRow {
  display: flex;

  & button {
    border-radius: 0;
    border: 1px solid #ccc;
    flex-grow: 1;
    min-height: 40px;
    cursor: pointer;
  }
}
</style>