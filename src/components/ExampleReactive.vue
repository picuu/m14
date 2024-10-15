<script setup>
  import { reactive } from 'vue'

  const user = reactive({
    name: 'Carlos',
    age: 19
  })

  const incrementAge = () => user.age++
</script>

<template>
  <div>
    <h3>Reactive example</h3>
    
    <p>The user <span>{{ user.name }}</span> is <span>{{ user.age }}</span> years old</p>
    <button @click="incrementAge">Increment user age</button>

    <small>Reactive is used to manage objects or arrays that can change and its values are displayed on the screen</small>
  </div>
</template>

<style scoped>
  span {
    font-weight: 700;
  }
</style>
