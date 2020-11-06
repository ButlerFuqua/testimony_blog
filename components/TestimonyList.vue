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
      chosenCategories: [],
    };
  },
  watch: {
    testimonies(val) {
      this.updateCategories(this.chosenCategories);
    },
  },
  methods: {
    updateCategories(chosenCategories) {
      chosenCategories = chosenCategories.map((filter) => filter.toLowerCase());
      let testimonies = [...this.testimonies];
      this.chosenCategories = [...chosenCategories];
      if (!chosenCategories.length) this.filteredTestimonies = testimonies;
      else
        this.filteredTestimonies = this.returnFilteredTestimonies(
          chosenCategories
        );
      this.sendTestimoniesToSidebar();
    },
    returnFilteredTestimonies(chosenCategories) {
      return this.testimonies.filter(
        (testimony) => testimony.tags && _hasAllFilters(testimony.tags)
      );

      function _hasAllFilters(tags) {
        let passes = false;
        for (let idx = 0; idx < chosenCategories.length; idx++) {
          let fil = chosenCategories[idx];
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

    this.$nuxt.$on("updateCategories", (chosenCategories) =>
      this.updateCategories(chosenCategories)
    );

    this.sendTestimoniesToSidebar();
  },
  beforeDestroy() {
    this.$nuxt.$off("updateCategories");
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
  width: 100%;
  max-width: 900px;
  margin: auto;
}
</style>