<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Vue logo" width="30" height="30" />
      <h1>Examen Final M14</h1>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/anys">Beques</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  border-bottom: 1px solid rgba(0 0 0 / 0.5);
}

.logo,
nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

a {
  padding: 0.35rem 0.6rem;
  background-color: transparent;
  border: 1px solid rgb(12, 211, 128);
  border-radius: 0.5rem;
  color: rgb(12, 211, 128);
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

a:hover,
a.router-link-exact-active:hover {
  background-color: rgba(6 230 125 / 0.25);
  color: black;
}

a.router-link-exact-active {
  background-color: rgb(12, 211, 128);
  color: #fff;
}
</style>
