<template>
  <article v-if="article">
    <v-btn
      style="margin: 1rem auto"
      @click="$router.push('/articles')"
      outlined
      color="teal darken-2"
      aria-label="back"
      >Back</v-btn
    >
    <nuxt-content :document="article" />
  </article>
  <article v-else>Erorr retreiving article.</article>
</template>

<script>
export default {
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