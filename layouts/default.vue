<template>
  <div id="container">
    <SearchTestimonies />
    <PageMenu />
    <Navigation />
    <Nuxt />
    <BottomBar :open="'Navigation'" />
  </div>
</template>


<script >
import Vue from "vue";
import Navigation from "../components/Navigation";
import SearchTestimonies from "../components/SearchTestimonies";
import PageMenu from "../components/PageMenu";
import BottomBar from "../components/BottomBar";

export default {
  components: { SearchTestimonies, Navigation, PageMenu, BottomBar },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

