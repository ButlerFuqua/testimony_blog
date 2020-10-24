<template>
  <div>
    <input type="text" @input="emitTestimonySearch" v-model="inputValue" />
  </div>
</template>

<script>
export default {
  name: "TestimonySearch",
  data() {
    return {
      inputValue: null,
    };
  },
  methods: {
    emitTestimonySearch() {
      const { inputValue, validateInputValue } = this;
      if (validateInputValue()) return;

      this.$nuxt.$emit("testimonySearch", inputValue);
    },
    validateInputValue() {
      const { inputValue } = this;

      return (
        !inputValue.trim().length ||
        inputValue.trim().length <= 1 ||
        inputValue.trim() == ""
      );
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 0.5rem;
}
</style>