<template>
  <article>
    <PageHeading
      title="The Testimonies app"
      subTitle="The app is currently in development."
      body="Please signup below to receive updates."
    />

    <v-card class="mb-4">
      <v-card-text
        v-for="section in sections"
        :key="section.title"
        class="black--text"
      >
        <h2 class="headline">{{ section.title }}</h2>
        <h3 v-if="section.subtitle">{{ section.subtitle }}</h3>
        <br v-else />
        <p v-for="paragraph in section.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </v-card-text>
    </v-card>

    <SignupSubmission />
    <v-card class="mb-4">
      <v-card-text class="black--text">
        <AboutButler />
      </v-card-text>
    </v-card>
  </article>
</template>

<script>
import SignupSubmission from "../components/signupSubmission.vue";
import PageHeading from "../components/pageHeading.vue";
import AboutButler from "../components/aboutButler";
export default {
  components: { SignupSubmission, AboutButler, PageHeading },
  data() {
    return {
      sections: [
        {
          title: 'What is the "Testimonies app"?',
          subtitle: null,
          paragraphs: [
            'The main goal of the Testimonies app is to grow a decentralized network of house fellowships, or "Jesus Fellowships."',
            "The app has two main functions.",
          ],
        },

        {
          title: "1) Fellowship network",
          subtitle: null,
          paragraphs: [
            "Anyone can register their fellowship to the app. Then other members can find your fellowship, see its meeting times, and request to join!",
          ],
        },
        {
          title: "2) Post testimonies",
          subtitle: null,
          paragraphs: [
            "When you post a testimony, everyone in your fellowship(s) will be able to view it and comment on it.",
          ],
        },
      ],
    };
  },
};
</script>

<style >
</style>