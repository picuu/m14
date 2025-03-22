<script setup>
import { RouterView } from 'vue-router'
import { MainHeader } from '@components'
</script>

<template>
  <MainHeader />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 1rem 2rem;
}
</style>
