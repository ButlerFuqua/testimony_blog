<template>
  <div id="container">
    <Navigation />
    <Nuxt />
  </div>
</template>


<script >
import Vue from "vue";
import Navigation from "../components/Navigation";

export default {};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

