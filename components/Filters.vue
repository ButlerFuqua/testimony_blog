<template>
  <ul>
    <li
      :key="filter"
      v-for="filter in filters"
      @click="updateFilter(filter)"
      :class="chosenFilters.includes(filter) ? 'chosen' : ''"
    >
      {{ filter }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: ["All", "healing", "salvation"],
      chosenFilters: [],
    };
  },
  methods: {
    updateFilter(filter) {
      const { chosenFilters, filters } = this;
      if (chosenFilters.indexOf(filter) === -1) chosenFilters.push(filter);
      else this.chosenFilters = chosenFilters.filter((fil) => fil !== filter);

      if (chosenFilters.includes("All")) this.chosenFilters = [];

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

  &.chosen {
    text-decoration: underline;
  }
}
</style>