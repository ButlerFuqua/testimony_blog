<template>
  <article>
    <nuxt-content :document="page" />
    <SignupSubmission />
  </article>
</template>

<script>
import SignupSubmission from "../components/signupSubmission.vue";

export default {
  components: { SignupSubmission },
  async asyncData({ $content, params }) {
    let page;
    try {
      page = await $content("pages", params.slug).fetch();
    } catch (e) {
      console.log(e);
    }
    page = page[0];

    return { page };
  },
};
</script>