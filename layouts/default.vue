<template>
  <div id="container">
    <PageMenu />
    <Navigation />
    <Nuxt />
  </div>
</template>


<script >
import Vue from "vue";
import Navigation from "../components/Navigation";
import PageMenu from "../components/PageMenu";

export default {
  components: { Navigation, PageMenu },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

