<template>
  <v-container>
    <PageHeading
      title="Statement of beliefs"
      subTitle="I try to keep these beliefs as few as possible to avoid splitting hairs."
      body="Below is the list of beliefs that I absolutley cannot comporomise on. If
      you disagree with one or more of these beliefs, then you may not be ready
      for this community."
    />

    <v-card
      :id="belief.title.replace(/\s/g, '_')"
      tile
      class="ma-3"
      v-for="belief in beliefs"
      :key="belief.title"
    >
      <v-card-text class="black--text">
        <h4 class="headline mb-3">{{ belief.title }}</h4>
        <p>{{ belief.description }}</p>
        <v-card-actions>
          <ChipList :items="belief.verses" />
        </v-card-actions>
        <!-- <v-card-actions>
          <ReadButton :path="`/beliefs/${belief.slug}`" text="Read more" />
        </v-card-actions> -->
      </v-card-text>
      <v-divider></v-divider>
    </v-card>
  </v-container>
</template>

<script>
import ChipList from "../../components/chipList";
import PageHeading from "../../components/pageHeading.vue";
import ReadButton from "../../components/readButton.vue";
export default {
  async asyncData({ $content, route }) {
    const q = route.query.q;
    let query = $content("beliefs", { deep: true }).sortBy(
      "order_number",
      "asc"
    );
    const beliefs = await query.fetch();
    return {
      beliefs,
    };
  },
  components: { ChipList, ReadButton, PageHeading },
};
</script>
    ReadButton