<template>
  <main>
    <TitleBar :title="`Testimonies`" :open="'Navigation'" />
    <TestimonyList v-if="testimonies" :testimonies="testimonies" />
    <BottomBar :open="'Navigation'" />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../components/TitleBar";
import TestimonyList from "../components/TestimonyList";
import BottomBar from "../components/BottomBar";

export default Vue.extend({
  components: { TitleBar, TestimonyList, BottomBar },
  data() {
    return {
      testimonies: null,
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
        // .limit(5)
        .fetch();
    },
  },
  async created() {
    await this.getTestimonies();
  },
});
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
  flex-grow: 1;
  overflow: auto;
  position: relative;
}
</style>