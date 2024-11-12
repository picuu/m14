<script setup>
import { inject } from 'vue'
import { IconX } from '@tabler/icons-vue'

const cart = inject('cart')
const currency = inject('currency')
const isMenuOpen = inject('isMenuOpen')
const menuName = inject('menuName')

const calculatePrice = (price) => {
  if (currency.value === 'USD') return `${(price * 1.06).toFixed(2)}$`
  return `${price}€`
}

const handleCloseMenu = () => {
  isMenuOpen.value = false
}

const getTotalPrice = () => {
  return calculatePrice(cart.value.reduce((acc, item) => acc + item.price, 0).toFixed(2))
}
</script>

<template>
  <menu :class="isMenuOpen === false ? 'closed' : ''">
    <div class="banner">
      <IconX stroke="1.5" class="icon" @click="handleCloseMenu" />
    </div>

    <div class="menu-content">
      <h3>TU PEDIDO</h3>

      <div v-if="cart.length > 0" class="list">
        <ul>
          <li v-for="item in cart" :key="item.id">
            <span>{{ item.name }}</span>
            <span>{{ calculatePrice(item.price) }}</span>
          </li>
        </ul>

        <div class="total-wrapper">
          <div class="total">
            <span>Total:</span>
            <span>{{ getTotalPrice() }}</span>
          </div>
        </div>
      </div>

      <span v-else class="empty-list-message">Tu bucket está vacío.<br />Empieza a llenzarlo!</span>

      <span v-if="menuName.length > 0" class="ticket-name">
        Pedido de <span class="bold">{{ menuName }}</span>
      </span>
    </div>
  </menu>
</template>

<style scoped>
menu {
  position: fixed;
  top: 104px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 400px;
  height: 100%;
  background-color: #fff;
  padding-bottom: 1rem;
  border-left: 1px solid rgba(0 0 0 / 0.1);
  box-shadow: -12px 0 8px -6px rgba(0 0 0 / 0.05);
  transition: transform 0.2s ease-in-out;
}

menu.closed {
  transform: translateX(100%);
}

.banner {
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 1rem;
  height: 36px;
  border-bottom: 1px solid rgba(0 0 0 / 0.1);
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 49%;
  width: 12px;
  height: 30px;
  box-shadow:
    inset 0 0 0 32px #e4002b,
    -22px 0 #e4002b,
    22px 0 #e4002b;
}

.icon {
  --size: 26px;

  width: var(--size);
  height: var(--size);
  padding: 1px;
  cursor: pointer;
}

.menu-content {
  padding-inline: 1.25rem 0.1rem;
}

ul,
.empty-list-message {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.7rem;
  list-style: none;
}

ul {
  max-height: 490px;
  overflow-y: scroll;
  scrollbar-width: thin;
  padding-right: 2rem;
}

ul li {
  display: flex;
  justify-content: space-between;
  padding-block: 0.5rem 0.35rem;
  border-bottom: 1px solid rgba(0 0 0 / 0.1);
}

.total-wrapper,
.ticket-name {
  padding-right: 2.75rem;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-block: 2rem 4rem;
  padding-block: 0.25rem;
  border-bottom: 1px solid rgba(0 0 0 / 0.5);
  font-weight: 600;
}

.ticket-name {
  display: flex;
  justify-content: end;
  gap: 0.35rem;
}

.bold {
  font-weight: 700;
}
</style>
