<template>
  <div class="container" :class="show ? 'show' : ''">
    <h1>Testimonies in Christ</h1>
    <button id="closeBtn" @click="show = false">Close</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$nuxt.$on("openNavigation", () => {
      this.show = true;
    });
  },
  unmounted() {
    this.$nuxt.$off("openNavigation");
  },
};
</script>


<style lang="scss" scoped>
.container {
  background: #ccc;
  min-width: 300px;

  @media (max-width: 800px) {
    position: absolute;
    width: 100%;
    right: 100%;
    z-index: 1;

    transition: 0.3s;

    &.show {
      right: 0;
    }
  }
}

#closeBtn {
  @media (min-width: 801px) {
    display: none;
  }
}
</style>