<template>
  <v-row justify="center">
    <v-card>
      <v-card-text class="black--text">
        <h1 v-if="title" class="headline">{{ title }}</h1>
        <h1 v-else class="headline">This feature is comming soon!</h1>
        <p v-if="message">{{ message }}</p>
        <p v-else>
          This section is currently in development. Please come back often to
          see updates to the website
        </p>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "ComingSoon",
  props: ["title", "message"],
};
</script>