<template>
  <li>
    {{ testimony.title }}
    <br />
    <span :key="tag" v-for="tag in testimony.tags">{{ tag }} </span>
    <br />
    <NuxtLink :to="`/testimonies/${testimony.slug}`">Read</NuxtLink>
  </li>
</template>

<script>
export default {
  name: "TestimonyListItem",
  props: ["testimony"],
};
</script>