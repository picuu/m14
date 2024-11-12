<script setup>
import { provide, ref } from 'vue'
import { productsData } from '@/consts/products'
import AppHeader from './components/AppHeader.vue'
import ProductList from '@/components/ProductList.vue'
import CartMenu from '@/components/CartMenu.vue'
import AppFooter from './components/AppFooter.vue'
import NameInput from './components/NameInput.vue'

const products = ref(productsData)

const cart = ref([])
const currency = ref('EUR')
const isMenuOpen = ref(false)
const menuName = ref('')

provide('cart', cart)
provide('currency', currency)
provide('isMenuOpen', isMenuOpen)
provide('menuName', menuName)
</script>

<template>
  <AppHeader />

  <main>
    <div class="main-content">
      <NameInput />
      <ProductList :products="products" />
      <CartMenu />
    </div>
  </main>

  <AppFooter />
</template>

<style>
main {
  position: relative;
  padding-top: calc(100px + 2rem);
}

.main-content {
  width: min(100% - 4rem, 1200px);
  margin-inline: auto;
}

.main-content > section + section {
  margin-top: 3rem;
}
</style>
