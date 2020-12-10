<template>
  <div>
    <h1 class="headline mb-5 text-center">Frequently Asked Questions (FAQ)</h1>

    <v-expansion-panels accordion class="mb-5">
      <v-expansion-panel
        class="elevation-0"
        v-for="(faq, idx) in faqs"
        :key="idx"
      >
        <v-expansion-panel-header>
          <h2 class="title">{{ faq.title }}</h2>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <nuxt-content :document="faq" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <SignupSubmission />
  </div>
</template>

<script>
import SignupSubmission from "../../components/signupSubmission";
export default {
  async asyncData({ $content, route }) {
    const q = route.query.q;
    let query = $content("faq", { deep: true }).sortBy("order_number", "asc");
    if (q) {
      query = query.search(q);
      // OR query = query.search('title', q)
    }
    const faqs = await query.fetch();
    return {
      q,
      faqs,
    };
  },
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {});
    },
  },
  watchQuery: true,
  components: { SignupSubmission },

  methods: {},
};
</script>