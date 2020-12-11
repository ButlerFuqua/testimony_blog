<template>
  <PageContent v-if="feature" :content="feature" path="/" />
  <article v-else>Erorr retreiving feature.</article>
</template>

<script>
import PageContent from "../../components/pageContenet";
export default {
  components: { PageContent },
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