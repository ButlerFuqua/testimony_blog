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
      if (!chosenFiltes.length)
        return (this.filteredTestimonies = this.testimonies);

      this.filteredTestimonies = this.filteredTestimonies.filter(
        (testimony) =>
          testimony.tags &&
          testimony.tags.some((tag) => chosenFiltes.includes(tag))
      );
    },
  },
  created() {
    this.filteredTestimonies = [...this.testimonies];

    this.$nuxt.$on("updateFilters", (chosenFiltes) =>
      this.updateFilters(chosenFiltes)
    );
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