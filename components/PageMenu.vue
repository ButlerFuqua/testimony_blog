<template>
  <div class="container">
    <ul>
      <li>About</li>
      <li>Submit a Testimony</li>
      <li>FAQ</li>
      <li>Terms &amp; Conditions</li>
      <li>Home</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PageMenu",
  data() {
    return {
      pages: [{}],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>

