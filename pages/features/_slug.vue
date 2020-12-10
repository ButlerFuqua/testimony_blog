<template>
  <article v-if="feature">
    <v-btn
      style="margin: 1rem auto"
      @click="$router.push('/')"
      outlined
      color="teal darken-2"
      aria-label="back"
      >Back</v-btn
    >
    <nuxt-content :document="feature" />
  </article>
  <article v-else>Erorr retreiving feature.</article>
</template>

<script>
export default {
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