<template>
  <article v-if="belief">
    <v-btn
      style="margin: 1rem auto"
      @click="$router.push('/beliefs')"
      outlined
      color="teal"
      aria-label="back"
      >Back</v-btn
    >
    <nuxt-content :document="belief" />
  </article>
  <article v-else>Erorr retreiving belief.</article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let belief;
    try {
      belief = await $content("beliefs", params.slug).fetch();
      // OR const belief = await $content(`beliefs/${params.slug}`).fetch()
    } catch (e) {
      console.log(e);
    }

    return { belief };
  },
};
</script>