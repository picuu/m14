<script setup>
import { RouterLink } from 'vue-router'
import { getDestinations } from '@/services/destinations'

const destinations = getDestinations()
</script>

<template>
  <header>
    <nav id="nav">
      <RouterLink to="/">Home</RouterLink>

      <RouterLink
        v-for="destination in destinations"
        :to="`/destination/${destination.id}`"
        :key="destination.id"
      >
        {{ destination.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped></style>
