<script setup>
import ProductCard from '@/components/ProductCard.vue'

const { products } = defineProps({
  products: Array
})
</script>

<template>
  <section>
    <h2>MENÚS BURGER</h2>

    <div class="product-list" role="list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :image="product.image"
        :name="product.name"
        :price="product.price"
      />
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}
</style>
