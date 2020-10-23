<template>
  <main>
    <TitleBar :title="`Title here`" :open="'Navigation'" />
    <TestimonyList :testimonies="testimonies" />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../components/TitleBar";
import TestimonyList from "../components/TestimonyList";

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
  components: { TitleBar, TestimonyList },
});
</script>


<style lang="scss" scoped>
main {
  height: 100%;
  flex-grow: 1;
}
</style>