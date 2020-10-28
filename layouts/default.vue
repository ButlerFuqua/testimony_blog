<template>
  <div id="container">
    <SearchTestimonies />
    <PageMenu />
    <Navigation />
    <Nuxt />
  </div>
</template>


<script >
import Vue from "vue";
import Navigation from "../components/Navigation";
import SearchTestimonies from "../components/SearchTestimonies";
import PageMenu from "../components/PageMenu";

export default {
  components: { SearchTestimonies, Navigation, PageMenu },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

