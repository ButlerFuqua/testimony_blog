<template>
  <main>
    <TitleBar :title="`Testimonies`" :open="'Navigation'" />
    <TestimonyList :testimonies="testimonies" />
    <BottomBar :open="'Navigation'" />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../components/TitleBar";
import TestimonyList from "../components/TestimonyList";
import BottomBar from "../components/BottomBar";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const testimonies = await $content("testimonies", params.slug)
      .only(["title", "description", "img", "slug", "author", "tags"])
      .sortBy("createdAt", "asc")
      // .limit(5)
      .fetch();
    return {
      testimonies,
    };
  },
  components: { TitleBar, TestimonyList, BottomBar },
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