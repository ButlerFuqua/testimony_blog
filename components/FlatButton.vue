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
  background: #6154ab;
  border: 1px solid #6154ab;
  text-decoration: none;
  color: #fff;
  padding: 5px 15px;
  border-radius: 1rem;
}
</style>