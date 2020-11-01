<template>
  <div
    ref="container"
    class="container"
    :class="hideOnScroll ? 'hideOnScroll' : ''"
  >
    <div class="buttonRow">
      <template v-for="btn in buttons">
        <button @click="btn.action" v-if="btn.condition" :key="btn.label">
          {{ btn.label }}
        </button>
      </template>
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
      buttons: [
        {
          label: "Filters",
          condition: this.open,
          action: this.openInfo,
        },
        {
          label: "Search",
          condition: true,
          action: () => this.$nuxt.$emit("showTestinmonySearch"),
        },
        {
          label: "Home",
          condition: true,
          action: () => this.$router.push("/"),
        },
        {
          label: "Pages",
          condition: true,
          action: () => this.$nuxt.$emit("showPageMenu"),
        },
      ],
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
    if (process.client) {
      this.lastScrollTop = window.pageYOffset;
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeDestroy() {
    if (process.client) window.removeEventListener("scroll", this.handleScroll);
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