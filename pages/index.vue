<script setup>
  console.log("Hi this is a test message");
</script>

<script>
  export default {
    data() {
      return {
        buttonClicks: 0
      }
    }
  }
</script>

<template>
  <div class="page">
    <div class="content">
      <header>
        <h1>Ryan Garrett's Website</h1>
        <h2>Everything here is temporary</h2>
      </header>
      <div>{{ buttonClicks }}</div>
      <button @click="buttonClicks++;">Click Me!</button>
      <MediaImageWide
        src="https://media.forgecdn.net/attachments/429/82/2021-12-18_20.png"
        alt="A wide example image"/>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
        laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex: 1 1;
    justify-content: center;
  }

  .content {
    width: min(75rem, 100%);
    background-color: $color-content-background;
    padding: 16px;
  }
</style>
