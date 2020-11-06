<template>
  <ul>
    <li
      :key="categorie"
      v-for="categorie in categories"
      @click="updateCategory(categorie)"
      :class="chosenCategories.includes(categorie) ? 'chosen' : ''"
    >
      <img
        :src="`app-icons/${categorie.toLowerCase()}_icon.svg`"
        :alt="`${categorie} icon`"
      />
      {{ categorie }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Categories",
  data() {
    return {
      categories: [
        "All",
        "Miracle",
        "Sexual",
        "Addiction",
        "Salvation",
        "Healing",
        "Other",
      ],
      chosenCategories: [],
    };
  },
  methods: {
    updateCategory(category) {
      const { chosenCategories, categories } = this;
      if (chosenCategories.indexOf(category) === -1)
        chosenCategories.push(category);
      else
        this.chosenCategories = chosenCategories.filter(
          (cat) => cat !== category
        );

      if (chosenCategories.includes("All")) this.chosenCategories = [];

      this.$nuxt.$emit("updateCategories", this.chosenCategories);
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
    width: 30px;
    max-height: 30px;
  }

  &.chosen {
    border-color: #ddd;
    font-weight: bold;
  }
}
</style>