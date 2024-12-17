<script setup>
import { ref, watch } from 'vue'

const filter = defineModel()

watch(filter, (newValue) => console.log(`Filtre canviat: ${newValue}`))
</script>

<template>
  <form @submit.prevent>
    <input type="text" placeholder="Filtra usuaris" v-model.trim="filter" />
  </form>
</template>
