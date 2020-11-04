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
        <p>
          <img :src="`../app-icons/default_icon.svg`" />
          {{ testimony.title }}
        </p>
        <CTALink :path="`/testimonies/${testimony.slug}`" text="Read" />
      </li>
    </ul>
  </div>
</template>

<script>
import CTALink from "./CTALink";
export default {
  name: "SearchTestimony",
  components: { CTALink },
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
  transition: 0.3s;

  &.showTestinmonySearch {
    top: 0;
    opacity: 1;
  }

  ul {
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;
    padding-bottom: 6rem;

    li {
      list-style: none;
      padding: 1rem;
      display: flex;
      justify-content: space-between;

      p {
        display: flex;
        align-items: center;
        img {
          width: 20px;
          margin-right: 1rem;
        }
      }
    }
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
  border-radius: 0;
  border: 1px solid #333;
}

button {
  border-radius: 0;
  border: none;
  background: #333;
  color: #fff;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>