<template>
  <nuxt-content :document="content" />
</template>

<script>
export default {
  name: "AboutButler",
  data() {
    return {
      content: null,
    };
  },
  methods: {
    async getContent() {
      let page;
      try {
        page = await this.$content("pages", `/about-butler`).fetch();
      } catch (e) {
        console.log(e);
      }

      this.content = page;
    },
  },
  async created() {
    await this.getContent();
  },
};
</script>