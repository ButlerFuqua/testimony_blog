<template>
  <article>
    <TitleBar :title="testimony.title" :open="'Info'" />
    <nuxt-content style="padding: 1rem; height: 100%" :document="testimony" />
    <p>Post last updated: {{ formatDate(testimony.updatedAt) }}</p>
    <BottomBar />
  </article>
</template>

<script >
import TitleBar from "../../components/TitleBar";
import BottomBar from "../../components/BottomBar";

export default {
  layout: "readPage",
  async asyncData({ $content, params }) {
    // fetch our testimony here
    const testimony = await $content("testimonies", params.slug).fetch();

    return { testimony };
  },
  components: { TitleBar, BottomBar },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {
    this.$nuxt.$emit("updateInfo", this.testimony);
  },
};
</script>

<style lang="scss" scoped>
article {
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
}
</style>
