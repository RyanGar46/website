<script>
  export default {
    props: {
      title: String,
      description: String,
      src: String,
      alt: String
    },
  }
</script>

<template>
  <div class="wide-image">
    <h2 v-if="title != undefined">{{title}}</h2>
    <img :src="src" :alt="alt != undefined ? alt : description">
    <div v-if="description != undefined">{{description}}</div>
  </div>
</template>

<style lang="scss">
  .wide-image {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 0;
    }

    img {
      max-width: 100%;
      flex: 1 1 auto;
      border-radius: $size-round-medium;
      margin: 8px 0px 8px 0px;
    }
  }
</style>
