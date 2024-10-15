<script setup>
  import { ref } from 'vue'

  const counter = ref(0)

  const incrementCounter = () => counter.value++
</script>

<template>
  <div>
    <h3>Ref example</h3>
    
    <p>Counter value: {{ counter }}</p>
    <button @click='incrementCounter'>Increment</button>

    <small>Ref is used to manage primitive values that can change as numbers or strings and are displayed on the screen</small>
  </div>
</template>

<style scoped>
</style>
