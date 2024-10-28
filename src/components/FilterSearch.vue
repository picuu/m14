<script setup>
import { defineModel } from 'vue'

const filter = defineModel()
</script>

<template>
  <form role="search" @submit.prevent>
    <label>
      <span>Filter contacts</span>
      <input type="text" v-model.trim="filter" placeholder="Search contact" />
    </label>
  </form>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

input {
  width: fit-content;
  padding: 0.25rem 0.5rem;
  background-color: rgba(25 220 150 / 0.5);
  border: none;
  border-radius: 0.25rem;
  color: #fff;
}

::-webkit-input-placeholder {
  color: #ccc;
}
</style>
