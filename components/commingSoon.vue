<template>
  <v-row justify="center">
    <v-card>
      <v-card-text class="black--text">
        <h1 class="headline">Comming Soon!</h1>
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
  props: ["message"],
};
</script>