<template>
  <div id="container">
    <TestimonyInfo />
    <Nuxt />
  </div>
</template>


<script >
import Vue from "vue";
import TestimonyInfo from "../components/TestimonyInfo";

export default {};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

