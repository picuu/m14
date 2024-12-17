<script setup>
import { inject } from 'vue'

const conunterValue = inject('counterValue')

const handleClick = () => {
  conunterValue.value -= 1
}
</script>

<template>
  <button @click="handleClick">-1</button>
</template>

<style scoped>
button {
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
}
</style>
