<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
      <h1>Examen UF2</h1>
    </div>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/aigua">Aigua</RouterLink>
      <RouterLink to="/compra">Llista Compra</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  background-color: #ccc;
}

.logo,
nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.logo h1 {
  font-size: 1.5rem;
}

nav a {
  padding: 0.35rem 0.6rem;
  background-color: transparent;
  border: 1px solid #09f;
  border-radius: 0.5rem;
  color: #09f;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

nav a:hover,
nav a.router-link-exact-active:hover {
  background-color: rgba(0 153 255 / 0.5);
  color: white;
}

nav a.router-link-exact-active {
  background-color: #09f;
  color: #fff;
}
</style>
