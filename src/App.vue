<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>
  <HeaderApp />

  <main class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
