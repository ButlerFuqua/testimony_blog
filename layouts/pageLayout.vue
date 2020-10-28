<template>
  <div id="container">
    <SearchTestimonies />
    <PageMenu />
    <Nuxt />
  </div>
</template>


<script >
import Vue from "vue";
import SearchTestimonies from "../components/SearchTestimonies";
import PageMenu from "../components/PageMenu";

export default {
  components: { SearchTestimonies, PageMenu },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

