<template>
  <v-row justify="center" v-if="features">
    <v-col v-for="feature in features" :key="feature.title" cols="12" :md="4">
      <v-card tile height="100%">
        <v-card-text class="black--text text-center">
          <h4 class="headline font-weight-light">{{ feature.title }}</h4>
          <v-divider color="teal" class="mt-2 mb-2"></v-divider>
          <p>
            {{ feature.description }}
          </p>
          <div class="text-center">
            <v-btn
              class="text-center"
              @click="$router.push(`/features/${feature.slug}`)"
              outlined
              color="teal darken-2"
              >Read more</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
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