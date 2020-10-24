<template>
  <div id="sidebar" class="container" :class="show ? 'show' : ''">
    <h1>Testimonies in Christ</h1>
    <p v-if="filteredTestimonies">
      {{ filteredTestimonies.length }} Testimonies showing
    </p>
    <Filters />
    <button id="closeBtn" @click="show = false">Close</button>
  </div>
</template>

<script>
import Filters from "./Filters";
export default {
  data() {
    return {
      show: false,
      filteredTestimonies: null,
    };
  },
  created() {
    this.$nuxt.$on("openNavigation", () => {
      this.show = true;
    });

    this.$nuxt.$on("sendTestimoniesToSidebar", (filteredTestimonies) => {
      this.filteredTestimonies = filteredTestimonies;
    });
  },
  unmounted() {
    this.$nuxt.$off("openNavigation");
    this.$nuxt.$off("sendTestimoniesToSidebar");
  },
};
</script>


<style lang="scss" scoped>
</style>