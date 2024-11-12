<script setup>
import { inject } from 'vue'
import { IconShoppingCartPlus } from '@tabler/icons-vue'

const { id, image, name, price } = defineProps({
  id: Number,
  image: String,
  name: String,
  price: Number
})

const cart = inject('cart')
const currency = inject('currency')

const calculatePrice = () => {
  if (currency.value === 'USD') return `${(price * 1.06).toFixed(2)}$`
  return `${price}€`
}

const handleClick = () => {
  const product = { id, image, name, price }
  cart.value.push(product)
}
</script>

<template>
  <article>
    <div class="image-container">
      <img :src="image" alt="product" />
    </div>

    <div class="product-card-content">
      <div class="product-info">
        <h3>{{ name }}</h3>
        <p>{{ calculatePrice() }}</p>
      </div>

      <button @click="handleClick">
        <IconShoppingCartPlus stroke="1.5" />
        <span>Añadir al carrito</span>
      </button>
    </div>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  border: 1px solid rgba(0 0 0 / 0.1);
  border-radius: 1.5rem;
}

article:hover img {
  transform: scale(1.1);
}

.image-container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: transform 250ms ease-in-out;
}

.product-card-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #e4002b;
  color: #fff;
  border: none;
  border-radius: 999vw;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
}

button:hover {
  background-color: #c70024;
}
</style>
