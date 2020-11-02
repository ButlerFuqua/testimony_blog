<template>
  <li>
    <h3>
      <img src="app-icons/default_icon.svg" />
      {{ testimony.title }}
    </h3>
    <small
      >Published: {{ testimony.published || "Unkown" }} | Occured:
      {{ testimony.occured || "Unknown" }}</small
    >
    <p>{{ testimony.description }}</p>
    <div class="tags">
      <span :key="tag" v-for="tag in testimony.tags">{{ tag }} </span>
    </div>
    <br />
    <div class="readBtnContainer">
      <CTALink :path="`/testimonies/${testimony.slug}`" text="Read" />
    </div>
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
h3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1.5rem;
    margin-right: 1rem;
  }
}
li {
  list-style: none;
  margin: 1rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
}

small {
  display: block;
  margin: 1rem 0;
}

.tags {
  span {
    padding: 0.1rem 0.5rem;
    border: 1px solid #f0c002;
    background: #f0c002;
    border-radius: 2rem;
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }
  span + span {
    margin-left: 0.5rem;
  }
}

.readBtnContainer {
  display: flex;
  justify-content: flex-end;
}
</style>