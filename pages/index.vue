<template>
  <v-container class="text-center" justify="center" align="center">
    <div class="logoContainer">
      <Logo />
    </div>

    <h1>The Testimonies App</h1>
    <h2>A decentralized network of believers and their testimonies.</h2>
    <v-divider inset style="margin: 1rem auto"></v-divider>
    <section class="infoSection text-left pa-3 mb-3">
      <Features />
    </section>
    <SignupSubmission />
  </v-container>
</template>

<script>
import Axios from "axios";

import Logo from "../components/logo";
import SignupSubmission from "../components/signupSubmission";
import Features from "../components/features";
export default {
  components: { Logo, SignupSubmission, Features },
  data() {
    return {};
  },
  methods: {},
  async created() {},
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
