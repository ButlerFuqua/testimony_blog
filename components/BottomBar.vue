<template>
  <div
    ref="container"
    class="container"
    :class="hideOnScroll ? 'hideOnScroll' : ''"
  >
    <div class="buttonRow">
      <template v-for="btn in buttons">
        <button @click="btn.action" v-if="btn.condition" :key="btn.label">
          <img :src="`../app-icons/${btn.label.toLowerCase()}_icon.svg`" />
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
          label: "Categories",
          condition: this.open,
          action: this.openInfo,
          icon: "default_icon.svg",
        },
        {
          label: "Search",
          condition: true,
          action: () => this.$nuxt.$emit("showTestinmonySearch"),
          icon: "default_icon.svg",
        },
        {
          label: "List",
          condition: true,
          action: () => this.$router.push("/"),
          icon: "default_icon.svg",
        },
        {
          label: "Pages",
          condition: true,
          action: () => this.$nuxt.$emit("showPageMenu"),
          icon: "default_icon.svg",
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
  created() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  bottom: 0;
  background: #fff;
  left: 0;
  width: 100%;

  transition: 0.3s;

  &.hideOnScroll {
    bottom: -65px;
  }
}
.buttonRow {
  display: flex;
  width: 100%;
  max-width: 900px;
  margin: auto;

  & button {
    background: #fff;
    border-radius: 0;
    border: 1px solid #eee;
    // border: none;
    flex-grow: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;
    max-height: 65px;

    img {
      max-width: 100%;
      width: 25px;
      margin-bottom: 3px;
    }
  }
}
</style>