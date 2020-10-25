<template>
  <div class="container">
    <ul>
      <li @click="goToPage(page.path)" :key="page.title" v-for="page in pages">
        {{ page.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageMenu",
  data() {
    return {
      pages: [
        { title: "About", path: "/about" },
        { title: "Submit a Testimony", path: "/submit" },
        { title: "FAQ", path: "/faq" },
        { title: "Terms &mp; Conditions", path: "/terms" },
      ],
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    },
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

