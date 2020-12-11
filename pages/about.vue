<template>
  <article>
    <nuxt-content :document="page" />
    <SignupSubmission />
    <AboutButler />
  </article>
</template>

<script>
import SignupSubmission from "../components/signupSubmission.vue";
import AboutButler from "../components/aboutButler";
export default {
  components: { SignupSubmission, AboutButler },
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

<style >
.nuxt-content h2,
h3,
h4,
h5 {
  margin-bottom: 0.5rem;
}
.nuxt-content h1 {
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #80808059;
}
</style>