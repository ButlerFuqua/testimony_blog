<template>
  <PageContent v-if="faq" :content="faq" path="/faq" />
  <article v-else>Erorr retreiving FAQ.</article>
</template>

<script>
import PageContent from "../../components/pageContenet";
export default {
  components: { PageContent },
  async asyncData({ $content, params }) {
    let faq;
    try {
      faq = await $content("faq", params.slug).fetch();
      // OR const faq = await $content(`faqs/${params.slug}`).fetch()
    } catch (e) {
      console.log(e);
    }

    return { faq };
  },
};
</script>