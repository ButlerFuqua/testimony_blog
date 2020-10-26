<template>
  <div id="sidebar" class="container" :class="show ? 'show' : ''">
    <h1>Testimonies in Christ</h1>
    <p v-if="filteredTestimonies && testimonies">
      {{ filteredTestimonies.length }} / {{ testimonies.length }} Testimonies
      filtered
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
      testimonies: null,
    };
  },
  created() {
    this.$nuxt.$on("openNavigation", () => {
      this.show = true;
    });

    this.$nuxt.$on(
      "sendTestimoniesToSidebar",
      (filteredTestimonies, testimonies) => {
        this.filteredTestimonies = filteredTestimonies;
        this.testimonies = testimonies;
      }
    );
  },
  beforeDestroy() {
    this.$nuxt.$off("openNavigation");
    this.$nuxt.$off("sendTestimoniesToSidebar");
  },
};
</script>


<style lang="scss" scoped>
</style>