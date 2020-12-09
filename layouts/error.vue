<template>
  <v-container class="text-center">
    <v-alert dark color="blue-grey darken-4" border="top">
      <p class="ma-4" v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </p>
      <p v-else class="ma-4">
        {{ otherError }}
      </p>
    </v-alert>
    <v-btn
      aria-label="home"
      class="mt-3"
      color="teal darken-2"
      dark
      @click="$router.push('/')"
      >Home</v-btn
    >
  </v-container>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "Sorry! The page you requested cannot be found.",
      otherError: "Oops! An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>