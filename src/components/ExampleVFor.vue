<script setup>
  const products = [
    {
      id: 1,
      name: 't-shirt',
      price: 19.99
    },
    {
      id: 2,
      name: 'hoodie',
      price: 29.99
    },
    {
      id: 3,
      name: 'pants',
      price: 24.99
    }
  ]
</script>

<template>
  <div>
    <h3>Directive v-for example</h3>

    <div>
      <h4>Products</h4>

      <ul>
        <li v-for="product in products" :key="product.id">{{ product.name }} - {{ product.price }}€</li>
      </ul>
    </div>

    <small>The directive v-for is used to render arrays in the DOM</small>
  </div>
</template>

<style scoped>
  h4 {
    font-weight: 600;
  }
</style>
