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
    <p>{{ testimony.description }}</p>
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
  background: #fff;
  border-radius: 5px;
}

small {
  display: block;
  margin: 1rem 0;
}

.meta {
  display: flex;
  span {
    padding: 0.1rem 0.5rem;
    border: 1px solid #f0c002;
    background: #f0c002;
    border-radius: 2rem;
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }
  span + span,
  img + img {
    margin-left: 0.5rem;
  }

  span.video {
    background: #dd4a4a;
    border: 1px solid #dd4a4a;
    color: #fff;
  }

  span.article {
    background: #00ff55;
    border: 1px solid #00ff55;
    // color: #fff;
  }
}

.readBtnContainer {
  display: flex;
  justify-content: flex-end;
}
</style>