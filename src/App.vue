<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header,
main {
  width: min(100% - 4rem, 1000px);
  margin-inline: auto;
  padding-block: 2rem;
}

header {
  display: flex;
  gap: 2rem;
}
</style>
