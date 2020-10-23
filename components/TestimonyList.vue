<template>
  <ul>
    <li :key="idx" v-for="(testimony, idx) in testimonies">
      {{ testimony.title }}
      <br />
      <span :key="tag" v-for="tag in testimony.tags">{{ tag }} </span>
      <br />
      <NuxtLink :to="`/testimonies/${testimony.slug}`">Read</NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TestimonyList",
  props: ["testimonies"],
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 1rem;
}

li {
  list-style: none;
  min-width: 30%;
  margin: 1rem auto;
  padding: 1rem;
  border: 1px solid;
}
</style>