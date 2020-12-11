<template>
  <article>
    <PageHeading
      title="About the Testimonies app and website"
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

    <!-- <nuxt-content :document="page" /> -->
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
          title: "Main Goal of the app",
          subtitle: null,
          paragraphs: [
            'The main goal of the Testimonies app is to grow a decentralized network of house-fellowships, or "Jesus Fellowships."',
          ],
        },
        {
          title: "How is this done?",
          subtitle: null,
          paragraphs: [
            "The app has two main functions to achieve its main goal.",
          ],
        },
        {
          title: "1) Fellowship network",
          subtitle: null,
          paragraphs: [
            "Anyone can register their fellowship to the app. Then other members can find your fellowship, see its meeting times, and request to join!",
            "If your fellowship grows too big, then you can easily split into two or more fellowships and register the new fellowships to the app. This is how the body of Christ is supposed to grow!",
          ],
        },
        {
          title: "2) Post testimonies",
          subtitle: null,
          paragraphs: [
            'The reason the app is named "Testimonies" is that testimonies are what make God real to us. Think of testimonies as the binding to keep us accountable, and the motivation for us to walk with God.',
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