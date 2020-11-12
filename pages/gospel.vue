<template>
  <main>
    <TitleBar title="The Gospel" :hideGospelBtn="true" />
    <div class="container">
      <div class="content">The gospel</div>
    </div>
  </main>
</template>

<script>
import TitleBar from "../components/TitleBar";
export default {
  name: "Gospel",
  layout: "readPage",
  components: { TitleBar },
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    padding: 1rem;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
}

main {
  height: 100vh;
  flex-grow: 1;
  overflow: auto;
  position: relative;
  background: #eee;
}
</style>