<script setup>
import { RouterView } from 'vue-router'
import { AppHeader } from '@/components'
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
