<script setup>
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>
  <HeaderApp />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  width: min(100% - 4rem, 1000px);
  margin-inline: auto;
  padding-block: 2rem;
}
</style>
