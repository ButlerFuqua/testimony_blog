<template>
  <v-row justify="center" v-if="features">
    <v-col
      v-for="feature in features"
      :key="feature.title"
      cols="12"
      sm="6"
      :md="4"
    >
      <v-card tile height="100%">
        <v-card-text class="black--text text-center">
          <h4 class="headline font-weight-light">{{ feature.title }}</h4>
          <v-divider color="teal" class="mt-2 mb-2"></v-divider>
          <p>
            {{ feature.description }}
          </p>
          <BackButton :path="`/features/${feature.slug}`" text="Read more" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BackButton from "./backButton.vue";
export default {
  components: { BackButton },
  name: "Features",
  data() {
    return {
      features: null,
    };
  },
  methods: {
    async getFeatures() {
      let query = this.$content("features", { deep: true }).sortBy(
        "order_number",
        "asc"
      );
      this.features = await query.fetch();
    },
  },
  async created() {
    await this.getFeatures();
  },
};
</script>