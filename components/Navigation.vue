<template>
  <div id="sideCategories" :class="show ? 'show' : ''">
    <div class="testimoniesLengthContainer">
      <img src="app-icons/default_icon.svg" />
      <p v-if="filteredTestimonies && testimonies">
        {{ filteredTestimonies.length }} / {{ testimonies.length }}
      </p>
    </div>
    <Categories />
  </div>
</template>

<script>
import Categories from "./Categories";
export default {
  data() {
    return {
      show: false,
      filteredTestimonies: null,
      testimonies: null,
    };
  },
  created() {
    this.$nuxt.$on("openNavigation", () => {
      this.show = !this.show;
    });

    this.$nuxt.$on(
      "sendTestimoniesToSidebar",
      (filteredTestimonies, testimonies) => {
        this.filteredTestimonies = filteredTestimonies;
        this.testimonies = testimonies;
      }
    );
  },
  beforeDestroy() {
    this.$nuxt.$off("openNavigation");
    this.$nuxt.$off("sendTestimoniesToSidebar");
  },
};
</script>


<style lang="scss" scoped>
#sideCategories {
  background: #fcfcfc;
  border-right: 1px solid #eee;

  position: relative;
  overflow: hidden;
  min-width: 80px;
  margin-left: -80px;
  transition: 0.2s;

  &.show {
    margin-left: 0;
  }
}

.testimoniesLengthContainer {
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 100%;
  width: 2.5rem;
}
</style>