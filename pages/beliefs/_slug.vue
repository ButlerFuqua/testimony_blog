<template>
  <PageContent v-if="belief" :content="belief" path="/" />
  <article v-else>Erorr retreiving belief.</article>
</template>

<script>
import PageContent from "../../components/pageContenet";
export default {
  components: { PageContent },
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