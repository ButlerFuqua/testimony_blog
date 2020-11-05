<template>
  <div id="testimonyListContainer">
    <ul>
      <TestimonyListItem
        :key="idx"
        v-for="(testimony, idx) in filteredTestimonies"
        :testimony="testimony"
      />
    </ul>
    <Pagination />
  </div>
</template>

<script>
import TestimonyListItem from "./TestimonyListItem";
import Pagination from "./Pagination";
export default {
  name: "TestimonyList",
  props: ["testimonies"],
  components: { TestimonyListItem },
  data() {
    return {
      filteredTestimonies: [],
      chosenFiltes: [],
    };
  },
  watch: {
    testimonies(val) {
      this.updateFilters(this.chosenFiltes);
    },
  },
  methods: {
    updateFilters(chosenFiltes) {
      chosenFiltes = chosenFiltes.map((filter) => filter.toLowerCase());
      let testimonies = [...this.testimonies];
      this.chosenFiltes = [...chosenFiltes];
      if (!chosenFiltes.length) this.filteredTestimonies = testimonies;
      else
        this.filteredTestimonies = this.returnFilteredTestimonies(chosenFiltes);
      this.sendTestimoniesToSidebar();
    },
    returnFilteredTestimonies(chosenFiltes) {
      return this.testimonies.filter(
        (testimony) => testimony.tags && _hasAllFilters(testimony.tags)
      );

      function _hasAllFilters(tags) {
        let passes = false;
        for (let idx = 0; idx < chosenFiltes.length; idx++) {
          let fil = chosenFiltes[idx];
          if (tags.includes(fil)) passes = true;
          else {
            passes = false;
            break;
          }
        }
        return passes;
      }
    },
    sendTestimoniesToSidebar() {
      this.$nuxt.$emit(
        "sendTestimoniesToSidebar",
        this.filteredTestimonies,
        this.testimonies
      );
    },
  },
  created() {
    this.filteredTestimonies = [...this.testimonies];

    this.$nuxt.$on("updateFilters", (chosenFiltes) =>
      this.updateFilters(chosenFiltes)
    );

    this.sendTestimoniesToSidebar();
  },
  beforeDestroy() {
    this.$nuxt.$off("updateFilters");
  },
};
</script>

<style lang="scss" scoped>
#testimonyListContainer {
  margin-bottom: 5rem;
}
ul {
  margin: 0;
  padding: 1rem;
  min-height: 100%;
}
</style>