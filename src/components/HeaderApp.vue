<script setup></script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/exercici1">Exercici 1</RouterLink>
      <RouterLink to="/exercici2">Exercici 2</RouterLink>
      <RouterLink to="/exercici3">Exercici 3</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: rgba(100 100 100 / 0.2);
}

nav {
  display: flex;
  gap: 2rem;
  width: min(100% - 4rem, 1000px);
  margin-inline: auto;
  padding-block: 2rem;
}

nav > a:not(:last-of-type) {
  padding-right: 2rem;
  border-right: 1px solid black;
}
</style>
