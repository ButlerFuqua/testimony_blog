<template>
  <article v-if="article">
    <BackButton path="/articles" />
    <nuxt-content :document="article" />
    <BackButton path="/articles" />
  </article>
  <article v-else>Erorr retreiving article.</article>
</template>

<script>
import BackButton from "../../components/backButton.vue";
export default {
  components: { BackButton },
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