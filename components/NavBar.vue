<template>
  <div class="nav-bar">
    <NuxtLink href="/">Home</NuxtLink>
    <div>Dropdown</div>
    <div>Dropdown</div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar {
    top: 0;
    position: sticky;
    display: flex;
    background-color: $color-nav-bar-background;
    color: $color-text-button;
    user-select: none;
    font-weight: bold;
    font-size: $size-text-button;

    
    div, a {
      margin: 4px;
      padding: 4px;
    }

    a {
      color: $color-text-button;
      text-decoration: none;
    }
  }
</style>
