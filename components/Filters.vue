<template>
  <ul>
    <li
      :key="filter"
      v-for="filter in filters"
      @click="updateFilter(filter)"
      :class="chosenFilters.includes(filter) ? 'chosen' : ''"
    >
      <img src="app-icons/default_icon.svg" />
      {{ filter }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Filters",
  data() {
    return {
      filters: [
        "All",
        "healing",
        "salvation",
        "win",
        "best",
        "other",
        "army",
        "Yes",
      ],
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
img {
  max-width: 100%;
}

ul {
  height: calc(99vh - 80px);
  overflow: auto;
  padding: 0;
  margin: 0;
  padding-bottom: 5rem;
}
li {
  list-style-type: none;
  cursor: pointer;
  width: 100%;
  background: #fcfcfc;
  border: 1px solid #eee;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    width: 2.5rem;
  }

  &.chosen {
    border-color: #ddd;
    font-weight: bold;
  }
}
</style>