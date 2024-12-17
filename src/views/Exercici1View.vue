<script setup>
const products = [
  {
    id: 1,
    name: 'Producte 1',
    description: 'Description of the product 1'
  },
  {
    id: 2,
    name: 'Producte 2',
    description: 'Description of the product 2'
  },
  {
    id: 3,
    name: 'Producte 3',
    description: 'Description of the product 3'
  }
]
</script>

<template>
  <section>
    <h2>Llistat de Productes</h2>

    <ul class="product-list">
      <li v-for="product in products" :key="product.id">
        <RouterLink :to="`/exercici1/${product.id}`">{{ product.name }}</RouterLink>
      </li>
    </ul>

    <RouterView :products="products" />
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1.5rem;
}

.product-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}
</style>
