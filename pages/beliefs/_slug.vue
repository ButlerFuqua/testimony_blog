<template>
  <article v-if="belief">
    <BackButton path="/beliefs" />
    <nuxt-content :document="belief" />
    <BackButton path="/beliefs" />
  </article>
  <article v-else>Erorr retreiving belief.</article>
</template>

<script>
import BackButton from "../../components/backButton.vue";
export default {
  components: { BackButton },
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