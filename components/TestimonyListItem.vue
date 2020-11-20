<template>
  <li>
    <h3>
      <img :src="`app-icons/${testimony.type}_icon.svg`" />
      {{ testimony.title }}
    </h3>
    <small
      >Published: {{ testimony.published }}
      {{ testimony.occured ? ` | Occured: ${testimony.occured}` : "" }}</small
    >
    <p class="description">{{ testimony.description }}</p>
    <div class="meta">
      <span :class="testimony.type">{{ testimony.type }}</span>
      <span :key="tag" v-for="tag in testimony.tags">{{ tag }} </span>
    </div>
    <br />
    <div class="readBtnContainer">
      <CTALink :path="`/testimonies/${testimony.slug}`" text="View" />
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
img {
  max-width: 100%;
}
h3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 30px;
    margin-right: 10px;
  }
}
li {
  list-style: none;
  margin: 1rem auto;
  padding: 1rem;
  background: $white;
  border-radius: 5px;
}

small {
  display: block;
  margin: 1rem 0;
}

.description {
  font-size: 0.9rem;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  span {
    padding: 0.1rem 0.5rem;
    border: 1px solid $default;
    background: $default;
    border-radius: 2rem;
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }
  span + span,
  img + img {
    margin-left: 0.5rem;
  }

  span.video {
    background: $tursh;
    border: 1px solid $tursh;
    color: $white;
  }

  span.article {
    background: $quad;
    border: 1px solid $quad;
    // color: $white;
  }
}

.readBtnContainer {
  display: flex;
  justify-content: flex-end;
}
</style>