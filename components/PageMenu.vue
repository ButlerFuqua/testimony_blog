<template>
  <div :class="showPageMenu ? 'showPageMenu' : ''" class="container">
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
      pages: [],
      showPageMenu: false,
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
      this.showPageMenu = false;
    },
  },
  async created() {
    this.$nuxt.$on("showPageMenu", () => (this.showPageMenu = true));

    this.pages = await this.$content("pages").fetch();
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
  left: 100%;
  top: 0;
  background: rgba(255, 255, 255, 1);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  &.showPageMenu {
    left: 0;
  }

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

