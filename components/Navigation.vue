<template>
  <div id="sideFilters" :class="show ? 'show' : ''">
    <p v-if="filteredTestimonies && testimonies">
      {{ filteredTestimonies.length }} / {{ testimonies.length }}
    </p>
    <Filters />
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
      this.show = !this.show;
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
#sideFilters {
  background: #ccc;
  position: relative;
  overflow: hidden;
  width: 80px;
  margin-left: -80px;
  transition: 0.2s;

  &.show {
    margin-left: 0;
  }
}
</style>