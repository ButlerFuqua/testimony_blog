<template>
  <ul>
    <li :key="filter" v-for="filter in filters" @click="updateFilter(filter)">
      {{ filter }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: ["healing", "salvation"],
      chosenFilters: [],
    };
  },
  methods: {
    updateFilter(filter) {
      const { chosenFilters, filters } = this;
      if (chosenFilters.indexOf(filter) === -1) chosenFilters.push(filter);
      else this.chosenFilters = chosenFilters.filter((fil) => fil !== filter);

      this.$nuxt.$emit("updateFilters", this.chosenFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>