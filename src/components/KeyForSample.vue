<script setup>
import { shuffle } from 'lodash'
import { ref } from 'vue'

const items = ref([
  { id: 1, label: 'first name' },
  { id: 2, label: 'last name' },
  { id: 3, label: 'email' },
  { id: 4, label: 'website' }
])

function shuffleItems() {
  items.value = shuffle(items.value)
}
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.label }}
      <input type="text" />
    </li>
  </ul>
  <button @click="shuffleItems">Shuffle</button>
</template>

<style>
ul {
  padding-right: 10px;
  margin-bottom: 10px;
  list-style: none;
}

li {
  margin-bottom: 0.25rem;
}

input {
  max-width: 100%;
  border: 1px solid rgba(0 0 0 / 0.35);
  border-radius: 0.25rem;
}

button {
  margin-right: 0.5rem;
}
</style>
