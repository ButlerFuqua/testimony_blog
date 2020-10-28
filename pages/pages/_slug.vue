<template>
  <main v-if="page">
    <TitleBar :title="page.title" :open="'Navigation'" />
    <nuxt-content style="padding: 1rem; height: 100%" :document="page" />
    <BottomBar :open="null" />
  </main>
</template>

<script>
import Vue from "vue";
import TitleBar from "../../components/TitleBar";
import BottomBar from "../../components/BottomBar";

export default Vue.extend({
  layout: "pageLayout",
  data() {
    return {
      page: null,
    };
  },
  methods: {
    async getPage() {
      this.page = await this.$content("pages", this.$route.params.slug).fetch();
    },
  },
  async created() {
    await this.getPage();
  },
  components: { TitleBar, BottomBar },
});
</script>


<style lang="scss" scoped>
</style>