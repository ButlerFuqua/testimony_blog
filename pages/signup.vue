<template>
  <v-container justify="center" align="center">
    <div class="text-center">
      <h1 class="dislpay-4 font-weight-regular">Sign up!</h1>
      <h1 v-if="numberOfSignups" class="dislpay-4 font-weight-light">
        {{ numberOfSignups }}
        signups and counting!
      </h1>
      <v-progress-circular v-else indeterminate></v-progress-circular>
      <p>This app is still in the planning/development stage.</p>
      <p>
        You have a golden opportunity to be an early adopter by being one of the
        first people to learn about the app.
      </p>
      <h2>How to stay in the loop?</h2>
      <p>
        Submit your phone number below (if you haven't already), and you will be
        texted when the app is ready to be downloaded.
      </p>
      <p>
        You will also be signed up for the email newsletter when it launches.
      </p>
    </div>
    <SignupSubmission />
  </v-container>
</template>

<script>
import Axios from "axios";

import Logo from "../components/logo";
import SignupSubmission from "../components/signupSubmission";
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
  components: { Logo, SignupSubmission },
  data() {
    return {
      numberOfSignups: null,
    };
  },
  methods: {
    async setNumberOfSignups() {
      const phoneNumbers = await this.$fire.database
        .ref(`/signup_submissions`)
        .once("value");

      this.numberOfSignups = Object.keys(phoneNumbers.val()).length;
    },
  },
  async created() {
    await this.setNumberOfSignups();
  },
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
}
.logoContainer {
  width: 5rem;
  margin: auto;
}
</style>
