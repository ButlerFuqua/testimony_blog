<template>
  <article v-if="testimony">
    <TitleBar :title="testimony.title" :open="'Info'" />
    <div id="contentContainer">
      <nuxt-content style="padding: 1rem" :document="testimony" />
    </div>
    <ShareTestimonyCTA />
  </article>
</template>

<script >
import TitleBar from "../../components/TitleBar";
import ShareTestimonyCTA from "../../components/ShareTestimonyCTA";

export default {
  layout: "readPage",
  components: { TitleBar, ShareTestimonyCTA },
  data() {
    return {
      testimony: null,
    };
  },
  methods: {
    async getTestimony() {
      this.testimony = await this.$content(
        "testimonies",
        this.$route.params.slug
      ).fetch();
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  async created() {
    await this.getTestimony();

    this.$nuxt.$emit("hideTestinmonySearch");
  },
  mounted() {
    this.$nuxt.$emit("updateInfo", this.testimony);
  },
  beforeDestroy() {
    this.$nuxt.$off("updateInfo");
  },
};
</script>

<style lang="scss" scoped>
article {
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  margin-bottom: 5rem;

  #contentContainer {
    width: 100%;
    max-width: 900px;
    margin: auto;

    * {
      max-width: 100%;
    }
  }

  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 3rem;
  }
}
</style>
