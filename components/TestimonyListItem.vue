<template>
  <li>
    <h3>
      {{ testimony.title }}
    </h3>
    <p>{{ testimony.description }}</p>
    <div class="tags">
      <span :key="tag" v-for="tag in testimony.tags">{{ tag }} </span>
    </div>
    <br />
    <CTALink :path="`/testimonies/${testimony.slug}`" text="Read" />
  </li>
</template>

<script>
import CTALink from "./CTALink";
export default {
  name: "TestimonyListItem",
  props: ["testimony"],
  components: { CTALink },
};
</script>

<style lang="scss" scoped>
h3,
p {
  margin-bottom: 1rem;
}
li {
  list-style: none;
  margin: 1rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
}

.tags {
  span {
    padding: 0.1rem 0.5rem;
    border: 1px solid #f0c002;
    border-radius: 2rem;
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }
  span + span {
    margin-left: 0.5rem;
  }
}
</style>