<template>
  <v-container class="text-center" justify="center" align="center">
    <div class="logoContainer">
      <Logo />
    </div>

    <h1>The Testimonies App</h1>
    <h2>A decentralized network of believers and their testimonies.</h2>
    <v-divider inset style="margin: 1rem auto"></v-divider>
    <section class="infoSection text-left">
    <p>Here are more specifics...</p>
    </section>
    <NumberSubmission />
  </v-container>
</template>

<script>
import Axios from "axios";

import Logo from "../components/logo";
import NumberSubmission from "../components/numberSubmission";
export default {
  components: { Logo, NumberSubmission },
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
