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
import SearchTestimonies from "../components/SearchTestimonies";
import PageMenu from "../components/PageMenu";
import BottomBar from "../components/BottomBar";

export default {
  components: { SearchTestimonies, PageMenu, BottomBar },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

