<script setup>
import { computed, ref } from 'vue'

const name = ref('Carlos')
const surname = ref('Capó')

const fullName = computed(() => `${name.value} ${surname.value}`)
</script>

<template>
  <h2>Form example</h2>

  <div>
    <p>Nom complet: {{ fullName }}</p>
    <input v-model="name" placeholder="Nom" />
    <input v-model="surname" placeholder="Cognom" />
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
