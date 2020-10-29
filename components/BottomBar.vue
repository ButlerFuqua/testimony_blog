<template>
  <div
    ref="container"
    class="container"
    :class="hideOnScroll ? 'hideOnScroll' : ''"
  >
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
  data() {
    return {
      hideOnScroll: false,
      lastScrollTop: 0,
    };
  },
  methods: {
    openInfo() {
      this.$nuxt.$emit(`open${this.open}`);
    },
    handleScroll() {
      const windowScrollTop = window.pageYOffset;
      const scrollDirection =
        windowScrollTop <= this.lastScrollTop ? "up" : "down";

      if (scrollDirection === "down") {
        this.hideOnScroll = true;
      } else if (scrollDirection === "up") {
        this.hideOnScroll = false;
      }
      this.lastScrollTop = windowScrollTop;
    },
  },
  created() {
    this.lastScrollTop = window.pageYOffset;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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

  transition: 0.3s;

  &.hideOnScroll {
    bottom: -45px;
  }
}
.buttonRow {
  display: flex;

  & button {
    border-radius: 0;
    border: 1px solid #ccc;
    flex-grow: 1;
    height: 40px;
    cursor: pointer;
  }
}
</style>