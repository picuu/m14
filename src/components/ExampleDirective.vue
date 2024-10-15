<script setup>
  const title = 'That\'s a title'
  const imageUrl = 'https://lenguajejs.com/vuejs/introduccion/que-es-vue/vuejs.png'
</script>

<template>
  <div>
    <h3>Directive v-bind example</h3>

    <div>
      <h4 v-bind:title="title">Hover your mouse here</h4>
      <img :src="imageUrl" alt="vuejs html5 css3 and js logos" title="vuejs">
    </div>

    <small>The directives let us make our DOM elements and its attributes reactive. So we can modify it through Vue or through the view itself</small>
  </div>
</template>

<style scoped>
  img {
    max-width: 600px;
  }
</style>
