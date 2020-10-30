<template>
  <div
    :class="showTestinmonySearch ? 'showTestinmonySearch' : ''"
    class="container"
  >
    <div class="inputContainer">
      <input ref="searchInput" type="text" v-model="inputValue" />
      <button @click="showTestinmonySearch = false">Close</button>
    </div>
    <ul v-if="testimonies && testimonies.length">
      <li :key="testimony.title" v-for="testimony in testimonies">
        {{ testimony.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchTestimony",
  data() {
    return {
      showTestinmonySearch: false,
      inputValue: null,
      testimonies: null,
    };
  },
  watch: {
    inputValue(val) {
      this.emitTestimonySearch();
    },
  },
  methods: {
    async emitTestimonySearch() {
      const { inputValue, validateInputValue } = this;

      if (validateInputValue()) {
        this.testimonies = await this.getAllTestimonies();
      } else {
        let testimonies = await this.getAllTestimonies();

        const filteredTestimonies = testimonies.filter((testimony) =>
          testimony.title.toLowerCase().includes(this.inputValue.toLowerCase())
        );

        this.testimonies = [...filteredTestimonies];
      }
    },
    validateInputValue() {
      const { inputValue } = this;

      return (
        !inputValue.trim().length ||
        inputValue.trim().length <= 1 ||
        inputValue.trim() == ""
      );
    },
    async getAllTestimonies() {
      const testimonies = await this.$content("testimonies")
        .only(["title", "description", "img", "slug", "author", "tags"])
        .sortBy("createdAt", "asc")
        .fetch();

      return testimonies;
    },
  },
  async created() {
    this.$nuxt.$on("showTestinmonySearch", () => {
      this.showTestinmonySearch = true;
      this.$refs.searchInput.focus();
    });

    this.testimonies = await this.getAllTestimonies();
  },
  beforeDestroy() {
    this.$nuxt.$off("showTestinmonySearch");
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 100%;
  background: rgba(255, 255, 255, 1);
  z-index: 3;
  opacity: 0;
  transition: 0.5s;

  &.showTestinmonySearch {
    top: 0;
    opacity: 1;
  }

  ul {
    height: 100%;
    overflow: auto;
  }

  .inputContainer {
    margin-top: 5px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
}

input {
  width: 100%;
  padding: 0.5rem;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>