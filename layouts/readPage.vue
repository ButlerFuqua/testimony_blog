<template>
  <div id="container">
    <SearchTestimonies />
    <PageMenu />
    <TestimonyInfo />
    <Nuxt />
  </div>
</template>


<script >
import Vue from "vue";
import TestimonyInfo from "../components/TestimonyInfo";
import PageMenu from "../components/PageMenu";
import SearchTestimonies from "../components/SearchTestimonies";

export default {
  components: { TestimonyInfo, PageMenu, SearchTestimonies },
};
</script>

<style lang="scss" scoped>
div#container {
  min-height: 100vh;
  display: flex;
}
</style>

