<script setup>
import { ref, watch } from 'vue'

// No array
const randomNumber = ref()
watch(randomNumber, (newValue, oldValue) => console.log('new number added: ', newValue, '\noldValue: ', oldValue))
const randomNum = () => (randomNumber.value = Math.random())

// Array
const numbers = ref([])
watch(numbers, (arrayValue) => console.log('newArray:\n', arrayValue), { deep: true })
const addRandomNum = () => numbers.value.push(Math.random())
</script>

<template>
  <button @click="randomNum">Generate Random Number</button>

  <br />

  <button @click="addRandomNum">Add Random Number to Array</button>
</template>
