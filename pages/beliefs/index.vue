<template>
    <v-container>
        <h1>Statement of beliefs</h1>
        <p>I try to keep these beliefs as few as possible to avoid splitting hairs.</p>
        <p>Below is the list of beliefs that I absolutley cannot comporomise on. If you disagree with one or more of these beliefs, then you may not be ready for this community.</p>
        <v-divider></v-divider>

        <v-list>
          <v-list-item-group v-model="model">
            <v-list-item
              v-for="belief in beliefs" :key="belief.title"
              :href="`#${belief.title.replace(/\s/g, '_')}`"
            >
              <v-list-item-content>
                <v-list-item-title  v-text="belief.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-card :id="belief.title.replace(/\s/g, '_')" flat class="ma-3" v-for="belief in beliefs" :key="belief.title">
           <v-card-text class="black--text">
               <h4 class="headline mb-3">{{belief.title}}</h4>
               <p>{{belief.description}}</p>
               <v-card-actions>
                    <v-chip
                        v-for="verse in belief.verses"
                        :key="verse"
                        class="ma-1"
                        >
                        {{verse}}
                    </v-chip>
               </v-card-actions>
               <v-card-actions>
                   <v-btn @click="$router.push(`/beliefs/${belief.slug}`)" outlined color="teal darken-2">Read more</v-btn>
               </v-card-actions>
           </v-card-text>
           </v-card>
    </v-container>
</template>

<script>
export default {
    async asyncData({ $content, route }) {
    const q = route.query.q;
    let query = $content("beliefs", { deep: true }).sortBy("order_number", "asc");
    if (q) {
      query = query.search(q);
      // OR query = query.search('title', q)
    }
    const beliefs = await query.fetch();
    return {
      q,
      beliefs,
    };
  },
  watch: {
    q() {
      this.$router
        .replace({ query: this.q ? { q: this.q } : undefined })
        .catch(() => {});
    },
  },
  watchQuery: true,
    name: "beliefs",
    data(){
        return {
          model:null
        }
    }
}
</script>