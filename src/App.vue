<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>
  <HeaderApp />

  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped></style>
