<template>
  <article v-if="feature">
    <BackButton path="/" />
    <nuxt-content :document="feature" />
  </article>
  <article v-else>Erorr retreiving feature.</article>
</template>

<script>
import BackButton from "../../components/backButton.vue";
export default {
  components: { BackButton },
  async asyncData({ $content, params }) {
    let feature;
    try {
      feature = await $content("features", params.slug).fetch();
      // OR const feature = await $content(`features/${params.slug}`).fetch()
    } catch (e) {
      console.log(e);
    }

    return { feature };
  },
};
</script>