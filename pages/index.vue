<template>
  <main>
    <TitleBar :title="`Title here`" :open="'Navigation'" />
    <TestimonyList :testimonies="testimonies" />
    <BottomBar />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../components/TitleBar";
import TestimonyList from "../components/TestimonyList";
import TestimonySearch from "../components/TestimonySearch";
import BottomBar from "../components/BottomBar";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const testimonies = await $content("testimonies", params.slug)
      .only(["title", "description", "img", "slug", "author", "tags"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      testimonies,
    };
  },
  components: { TitleBar, TestimonyList, TestimonySearch, BottomBar },
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