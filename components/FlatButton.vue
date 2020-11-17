<template>
  <button @click="action">{{ label }}</button>
</template>

<script>
export default {
  name: "FlatButton",
  props: ["action", "label"],
};
</script>


<style lang="scss" scoped>
button {
  background: $secondary;
  border: 1px solid $secondary;
  text-decoration: none;
  color: $white;
  padding: 5px 15px;
  border-radius: 1rem;
}
</style>