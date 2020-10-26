<template>
  <div v-if="showPageMenu" class="container">
    <ul>
      <li @click="goToPage(page.path)" :key="page.title" v-for="page in pages">
        {{ page.title }}
      </li>
      <li @click="showPageMenu = false" style="text-align: center">X</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageMenu",
  data() {
    return {
      pages: [
        { title: "About", path: "/pages/about" },
        { title: "Submit a Testimony", path: "/pages/submit" },
        { title: "FAQ", path: "/pages/faq" },
        { title: "Terms &mp; Conditions", path: "/pages/terms" },
      ],
      showPageMenu: false,
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
  },
  created() {
    this.$nuxt.$on("showPageMenu", () => (this.showPageMenu = true));
  },
  beforeDestroy() {
    this.$nuxt.$off("showPageMenu");
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
</style>

