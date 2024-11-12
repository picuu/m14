<script setup>
import { provide, ref } from 'vue'
import { IconShoppingCart } from '@tabler/icons-vue'
import { productsData } from '@/consts/products'
import CurrencySelector from '@/components/CurrencySelector.vue'
import ProductList from '@/components/ProductList.vue'
import CartMenu from '@/components/CartMenu.vue'

const products = ref(productsData)

const cart = ref([])
const currency = ref('EUR')

provide('cart', cart)
provide('currency', currency)
</script>

<template>
  <header>
    <div class="header-content">
      <h1>Vue 3 Shop - KFC</h1>

      <div class="header--right">
        <CurrencySelector />
        <IconShoppingCart stroke="1.5" class="icon" />
      </div>
    </div>
  </header>

  <main>
    <div class="main-content">
      <ProductList :products="products" />
      <CartMenu />
    </div>
  </main>

  <footer>
    <div class="footer-content credits">
      <span>Made by <a href="https://carloscapo.com" target="_blank" rel="noopener noreferrer">carloscapo</a></span>
      |
      <a href="https://github.com/picuu/m14/tree/pr02-chat" target="_blank" rel="noopener noreferrer">GitHub repo</a>
    </div>
  </footer>
</template>

<style scoped>
main {
  position: relative;
}

.main-content,
.header-content,
.footer-content {
  width: min(100% - 4rem, 1200px);
  margin-inline: auto;
}

header {
  padding-block: 2rem;
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgba(0 0 0 / 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header--right {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.icon {
  --size: 26px;

  width: var(--size);
  height: var(--size);
  padding: 1px;
  cursor: pointer;
}

footer {
  padding-block: 1rem;
  margin-top: 4rem;
  background-color: #f5f5f5;
  border-top: 1px solid rgba(0 0 0 / 0.1);
}

.credits {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding-top: 0.5rem;
  font-size: 0.85rem;
}
</style>
