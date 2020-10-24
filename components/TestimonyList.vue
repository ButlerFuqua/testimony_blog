<template>
  <ul>
    <li :key="idx" v-for="(testimony, idx) in filteredTestimonies">
      {{ testimony.title }}
      <br />
      <span :key="tag" v-for="tag in testimony.tags">{{ tag }} </span>
      <br />
      <NuxtLink :to="`/testimonies/${testimony.slug}`">Read</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TestimonyList",
  props: ["testimonies"],
  data() {
    return {
      filteredTestimonies: [],
    };
  },
  methods: {
    updateFilters(chosenFiltes) {
      let testimonies = [...this.testimonies];
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
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 1rem;
}

li {
  list-style: none;
  min-width: 30%;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid;
}
</style>