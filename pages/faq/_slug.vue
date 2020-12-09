<template>
  <article v-if="faq">
    <v-btn
      style="margin: 1rem auto"
      @click="$router.push('/faq')"
      outlined
      color="teal"
      aria-label="back"
      >Back</v-btn
    >
    <nuxt-content :document="faq" />
    <v-divider style="margin: 1rem auto"></v-divider>

    <NumberSubmission />
  </article>
  <article v-else>Erorr retreiving FAQ.</article>
</template>

<script>
import NumberSubmission from "../../components/numberSubmission";
export default {
  components: { NumberSubmission },
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