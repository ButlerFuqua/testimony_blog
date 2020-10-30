<template>
  <div id="container">
    <SearchTestimonies />
    <PageMenu />
    <Nuxt />
    <BottomBar :open="null" />
  </div>
</template>


<script >
import Vue from "vue";
import PageMenu from "../components/PageMenu";
import SearchTestimonies from "../components/SearchTestimonies";
import BottomBar from "../components/BottomBar";

export default {
  components: { PageMenu, SearchTestimonies, BottomBar },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

