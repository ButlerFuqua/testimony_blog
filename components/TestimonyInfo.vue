<template>
  <div class="container" :class="show ? 'show' : ''">
    <div v-if="testimonyInfo">
      <h1>{{ testimonyInfo.title }}</h1>
    </div>
    <button id="closeBtn" @click="show = false">Close</button>
    <NuxtLink to="/">Back</NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      testimonyInfo: null,
    };
  },
  created() {
    this.$nuxt.$on("openInfo", () => {
      this.show = true;
    });

    this.$nuxt.$on("updateInfo", (testimony) => {
      this.testimonyInfo = testimony;
    });
  },
  beforeDestroy() {
    this.$nuxt.$off("openInfo");
    this.$nuxt.$off("updateInfo");
  },
};
</script>


<style lang="scss" scoped>
.container {
  background: #ccc;
  min-width: 300px;
  max-width: 300px;

  @media (max-width: 800px) {
    position: absolute;
    width: 100%;
    max-width: 100%;
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