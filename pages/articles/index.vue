<template>
  <v-container v-if="!readyToPublish">
    <CommingSoon />
    <v-divider class="mt-5 mb-5"></v-divider>
    <SignupSubmission />
  </v-container>
  <v-container v-else>
    <h1>Articles</h1>
    <p>Just some thoughts pertaining to life and godliness.</p>

    <v-divider class="mb-4"></v-divider>

    <v-row>
      <v-col cols="12" md="6" v-for="article in articles" :key="article.title">
        <v-card
          :id="article.title.replace(/\s/g, '_')"
          outlined
          tile
          class="ma-3"
        >
          <v-card-text class="black--text">
            <h4 class="headline mb-3">{{ article.title }}</h4>
            <p>{{ article.description }}</p>
            <p>
              <small>{{ article.author }}</small>
            </p>
            <v-card-actions>
              <ChipList :items="article.tags" />
            </v-card-actions>
            <v-card-actions>
              <v-btn
                @click="$router.push(`/articles/${article.slug}`)"
                outlined
                color="teal darken-2"
                >Read</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChipList from "../../components/chipList";
import CommingSoon from "../../components/commingSoon.vue";
export default {
  async asyncData({ $content, route }) {
    const q = route.query.q;
    let query = $content("articles", { deep: true }).sortBy(
      "order_number",
      "asc"
    );
    const articles = await query.fetch();
    return {
      articles,
    };
  },
  components: { ChipList, CommingSoon },
  data() {
    return {
      readyToPublish: false,
    };
  },
};
</script>