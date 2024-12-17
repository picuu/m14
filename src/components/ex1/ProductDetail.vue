<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { products } = defineProps({
  products: Array
})

const route = useRoute()

const product = computed(() => products.find((product) => product.id === Number(route.params.id)))
</script>

<template>
  <article>
    <h3>Detall del producte</h3>

    <div>
      <p>ID: {{ product.id }}</p>
      <p>Nom del producte: {{ product.name }}</p>
      <p>Descripció: {{ product.description }}</p>
    </div>
  </article>
</template>

<style scoped>
article,
article > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

article > div {
  gap: 0.5rem;
}
</style>
