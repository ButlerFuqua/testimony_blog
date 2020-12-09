<template>
    <div>
        <h2>Table of contents</h2>
        <v-list>
          <v-list-item-group v-model="model">
            <v-list-item
              v-for="item in items" :key="item.title"
              :href="`#${item.title.replace(/\s/g, '_')}`"
            >
              <v-list-item-content>
                <v-list-item-title  v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
export default {
    name: "TableOfContents",
    props: ["items"]
}
</script>