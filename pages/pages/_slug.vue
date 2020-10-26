<template>
  <main>
    <TitleBar :title="page.title" :open="'Navigation'" />
    <nuxt-content style="padding: 1rem; height: 100%" :document="page" />
    <BottomBar />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../../components/TitleBar";
import BottomBar from "../../components/BottomBar";

export default Vue.extend({
  async asyncData({ $content, params }) {
    const page = await $content("pages", params.slug).fetch();
    return { page };
  },
  components: { TitleBar, BottomBar },
});
</script>


<style lang="scss" scoped>
</style>