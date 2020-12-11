<template>
  <article>
    <BackButton :path="path" />
    <v-card class="mb-4">
      <v-card-text class="black--text">
        <nuxt-content :document="content" />
      </v-card-text>
    </v-card>
    <BackButton :path="path" />
    <SignupSubmission />
  </article>
</template>

<script>
import BackButton from "../components/backButton";
import SignupSubmission from "../components/signupSubmission";
export default {
  name: "PageLayout",
  props: ["content", "path"],
  components: { BackButton, SignupSubmission },
};
</script>