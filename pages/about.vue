<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let page;
    try {
      page = await $content("pages", params.slug).fetch();
      // OR const page = await $content(`pages/${params.slug}`).fetch()
    } catch (e) {
      console.log(e);
    }
    page = page[0];

    return { page };
  },
};
</script>