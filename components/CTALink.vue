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
  background: $primary;
  text-decoration: none;
  color: $white;
  padding: 5px 15px;
  border-radius: 1rem;
  box-shadow: -1px 3px 3px rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  border-bottom: 2px solid $white;
}
</style>