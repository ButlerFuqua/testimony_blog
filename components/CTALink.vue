<template>
  <NuxtLink :to="path">{{ text }}</NuxtLink>
</template>

<script>
export default {
  name: "CTALink",
  props: ["path", "text"],
};
</script>

<style lang="scss" scoped>
a {
  background: #6b0af0;
  text-decoration: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 1rem;
  box-shadow: -1px 3px 3px rgba(0, 0, 0, 0.5);
}
</style>