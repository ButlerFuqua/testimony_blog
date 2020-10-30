<template>
  <article v-if="testimony">
    <TitleBar :title="testimony.title" :open="'Info'" />
    <nuxt-content style="padding: 1rem" :document="testimony" />
  </article>
</template>

<script >
import TitleBar from "../../components/TitleBar";

export default {
  layout: "readPage",
  components: { TitleBar },
  data() {
    return {
      testimony: null,
    };
  },
  methods: {
    async getTestimony() {
      this.testimony = await this.$content(
        "testimonies",
        this.$route.params.slug
      ).fetch();
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  async created() {
    await this.getTestimony();
  },
  mounted() {
    this.$nuxt.$emit("updateInfo", this.testimony);
  },
  beforeDestroy() {
    this.$nuxt.$off("updateInfo");
  },
};
</script>

<style lang="scss" scoped>
article {
  flex-grow: 1;
  height: 100%;
  overflow: auto;
  margin-bottom: 3rem;
}
</style>
