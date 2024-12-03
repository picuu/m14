<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter()

const goToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <header>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <button @click="goToAbout">Go to About without RouterLink</button>
    <RouterLink to="/computed">Go to Computed View</RouterLink>
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
