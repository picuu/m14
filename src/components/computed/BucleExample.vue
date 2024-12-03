<script setup>
import { computed, ref } from 'vue'

const minPrice = ref(0)

const products = ref([
  { name: 'Monitor', price: 200 },
  { name: 'Teclat', price: 20 },
  { name: 'Ratolí', price: 10 },
  { name: 'Auriculars', price: 50 },
  { name: 'Càmera', price: 150 }
])

const filteredProducts = computed(() => products.value.filter((product) => product.price >= minPrice.value))
</script>

<template>
  <h2>Bucle example</h2>

  <input v-model.number="minPrice" placeholder="Preu mínim" />
  <ul>
    <li v-for="product in filteredProducts" :key="product.name">{{ product.name }} - {{ product.price }} €</li>
  </ul>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
</style>
