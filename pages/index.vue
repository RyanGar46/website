<script setup>
  console.log("Hi this is a test message");

  let buttonClicks = 0;
</script>

<template>
  <div>
    <header>
      <h1>Ryan Garret's Website</h1>
      <h2>Everything here is temporary</h2>
    </header>
    <div>{{ buttonClicks }}</div>
    <button>Click Me!</button>
    <div>
      <div>Some Text</div>
      <img src="" alt="Wide Image">
      <div>Description</div>
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iusto aut ad explicabo voluptatum consequuntur doloremque? Reiciendis quam, quis eveniet 
      laudantium repellendus nihil eius quidem, cupiditate sed, provident accusamus atque.
    </p>
  </div>
</template>
