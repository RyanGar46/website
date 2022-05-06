<template>
  <div class="main">
    <NavBar/>
    <NuxtPage/>
    <MainFooter/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    color: $color-text;
    background-color: $color-page-background;

    > div {
      min-width: 100vw;
      min-height: 100vh;
    }
  }

  title {
    font-size: $size-text-title;
  }

  h1 {
    font-size: $size-text-h1;
  }

  h2 {
    font-size: $size-text-h2;
  }

  p {
    font-size: $size-text-p;
  }
</style>

<style scoped>
  .main {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
  }
</style>
