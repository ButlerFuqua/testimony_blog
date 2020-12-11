<template>
  <PageContent v-if="article" :content="article" path="/" />
  <article v-else>Erorr retreiving article.</article>
</template>

<script>
import PageContent from "../../components/pageContenet";
export default {
  components: { PageContent },
  async asyncData({ $content, params }) {
    let article;
    try {
      article = await $content("articles", params.slug).fetch();
      // OR const article = await $content(`articles/${params.slug}`).fetch()
    } catch (e) {
      console.log(e);
    }

    return { article };
  },
};
</script>