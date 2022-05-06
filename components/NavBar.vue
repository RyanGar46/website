<template>
  <div class="nav-bar">
    <div>Dropdown</div>
    <div>Dropdown</div>
    <div>Button</div>
    <div>Button</div>
    <div>Button</div>
    <div>Button</div>
  </div>
</template>

<style lang="scss" scoped>
  .nav-bar {
    background-color: $color-nav-bar-background;
    display: flex;
    position: sticky;
    top: 0;
    user-select: none;
    color: $color-text-button;
    font-weight: bold;
    font-size: $size-text-button;

    div {
      margin: 4px;
      padding: 4px;
    }
  }
</style>
