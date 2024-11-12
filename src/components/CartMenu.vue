<script setup>
import { inject } from 'vue'

const cart = inject('cart')
const currency = inject('currency')

const calculatePrice = (price) => {
  if (currency.value === 'USD') return `${(price * 1.06).toFixed(2)}$`
  return `${price}€`
}
</script>

<template>
  <menu>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <span>{{ item.name }}</span>
        <span>{{ calculatePrice(item.price) }}</span>
      </li>
    </ul>
  </menu>
</template>

<style scoped>
menu {
  position: absolute;
  top: -2rem;
  right: 0;
  background-color: #f5f5f5;
  padding: 1rem;
  border-left: 1px solid rgba(0 0 0 / 0.1);
}
</style>
