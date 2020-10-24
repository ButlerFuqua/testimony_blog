<template>
  <main>
    <TitleBar :title="`Title here`" :open="'Navigation'" />
    <TestimonyList :testimonies="testimonies" />
    <!-- <Pagination /> -->
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../components/TitleBar";
import TestimonyList from "../components/TestimonyList";
import Pagination from "../components/Pagination";

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
  components: { TitleBar, TestimonyList, Pagination },
});
</script>


<style lang="scss" scoped>
main {
  height: 100vh;
  flex-grow: 1;
  overflow: auto;
}
</style>