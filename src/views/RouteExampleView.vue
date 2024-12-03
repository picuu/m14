<script setup></script>

<template>
  <router-link to="/">Home</router-link>- <router-link :to="{ name: 'desti', params: { id: 1 } }">p1</router-link>-
  <router-link :to="{ name: 'desti', params: { id: 2 }, query: { cerca: 'llibre', categoria: 'ficcio' } }">p2</router-link>-
  <router-link :to="{ name: 'desti', params: { id: 3 }, query: filtres }">p3</router-link>-
  <router-link :to="{ name: 'desti', params: { id: 4 }, hash: '#contact' }">p4</router-link>

  <router-view />
</template>
