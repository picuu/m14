<script setup>
import { inject, ref } from 'vue'
import CurrencySelector from '@/components/CurrencySelector.vue'
import { IconShoppingCart } from '@tabler/icons-vue'

const isMenuOpen = inject('isMenuOpen')

const handleToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div class="header-content">
      <h1>Vue 3 Provide & Inject - KFC</h1>

      <div class="header--right">
        <CurrencySelector />
        <div class="icon-wrapper" @click="handleToggleMenu">
          <IconShoppingCart stroke="1.5" class="icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-content {
  width: min(100% - 4rem, 1200px);
  margin-inline: auto;
}

header {
  position: fixed;
  width: 100%;
  padding-block: 2rem;
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgba(0 0 0 / 0.1);
  z-index: 99;
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

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 99vw;
  cursor: pointer;
}

.icon-wrapper:hover {
  background-color: rgba(0 0 0 / 0.07);
}

.icon {
  --size: 30px;

  width: var(--size);
  height: var(--size);
  padding: 2px;
}
</style>
