<template>
  <main>
    <TitleBar :title="`Testimonies`" :open="'Navigation'" />
    <TestimonyList v-if="testimonies" :testimonies="testimonies" />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../components/TitleBar";
import TestimonyList from "../components/TestimonyList";

export default Vue.extend({
  components: { TitleBar, TestimonyList },
  data() {
    return {
      testimonies: null,
      testimoniesPerLoad: 10,
    };
  },
  methods: {
    async getTestimonies() {
      this.testimonies = await this.$content(
        "testimonies",
        this.$route.params.slug
      )
        .only(["title", "description", "img", "slug", "author", "tags"])
        .sortBy("createdAt", "asc")
        .limit(this.testimoniesPerLoad)
        .fetch();
    },
    async loadMoreTestimoines() {
      let moreTestimoines = await this.$content(
        "testimonies",
        this.$route.params.slug
      )
        .only(["title", "description", "img", "slug", "author", "tags", "date"])
        .sortBy("date", "asc")
        .skip(this.testimonies.length)
        .limit(this.testimoniesPerLoad)
        .fetch();

      this.testimonies = [...this.testimonies, ...moreTestimoines];
    },
  },
  async created() {
    await this.getTestimonies();

    this.$nuxt.$on("loadMoreTestimonies", () => this.loadMoreTestimoines());
  },
});
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  flex-grow: 1;
  overflow: auto;
  position: relative;
  background: #eee;
}
</style>