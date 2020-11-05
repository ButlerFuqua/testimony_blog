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
  async asyncData({ $content, params }) {
    const testimonies = await $content("testimonies", params.slug)
      .sortBy("postNumber", "asc")
      .limit(10)
      .fetch();
    return {
      testimonies,
    };
  },
  components: { TitleBar, TestimonyList },
  data() {
    return {
      testimoniesPerLoad: 10,
    };
  },
  methods: {
    async loadMoreTestimoines() {
      let moreTestimoines = await this.$content(
        "testimonies",
        this.$route.params.slug
      )
        .sortBy("postNumber", "asc")
        .skip(this.testimonies.length)
        .limit(this.testimoniesPerLoad)
        .fetch();

      this.testimonies = [...this.testimonies, ...moreTestimoines];
    },
  },
  created() {
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