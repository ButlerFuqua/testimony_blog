<template>
  <div
    :class="showTestinmonySearch ? 'showTestinmonySearch' : ''"
    class="container"
  >
    <input type="text" @input="emitTestimonySearch" v-model="inputValue" />
    <ul v-if="testimonies && testimonies.length">
      <li :key="testimony.title" v-for="testimony in testimonies">
        {{ testimony.title }}
      </li>
    </ul>
    <div class="btnContainer">
      <button @click="showTestinmonySearch = false">Close</button>
    </div>
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
  methods: {
    async emitTestimonySearch() {
      const { inputValue, validateInputValue } = this;
      if (validateInputValue()) {
        this.testimonies = await this.getAllTestimonies();
      } else {
        let testimonies = await this.getAllTestimonies();

        const filteredTestimonies = testimonies.filter((testimony) =>
          testimony.title.toLowerCase().includes(this.inputValue)
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
    this.$nuxt.$on(
      "showTestinmonySearch",
      () => (this.showTestinmonySearch = true)
    );

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
  transition: 0.3s;

  &.showTestinmonySearch {
    top: 0;
  }

  ul {
    height: 100%;
    overflow: auto;
  }

  .btnContainer {
    display: flex;
    align-content: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 2rem;
  }
}

input {
  margin-top: 5px;
  width: 100%;
  padding: 0.5rem;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>