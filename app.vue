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
    color: $color-text-p;
    font-size: $size-text-p;
    background-color: $color-page-background;

    > div {
      min-width: 100vw;
      min-height: 100vh;
    }
  }

  h1 {
    font-size: $size-text-h1;
    color: $color-text-h1;
  }

  h2 {
    font-size: $size-text-h2;
    color: $color-text-h2;
  }

  p {
    font-size: $size-text-p;
    color: $color-text-p;
  }

  button {
    font-size: $size-text-button;
    color: $color-text-button;
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
