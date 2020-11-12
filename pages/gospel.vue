<template>
  <main>
    <TitleBar title="The Gospel" :hideGospelBtn="true" />
    <div class="container">
      <div class="content">
        <div class="youtubeContainer">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sNme1cRSODI?start=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
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