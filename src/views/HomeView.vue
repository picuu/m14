<script setup>
import DestinationCard from '@/components/DestinationCard.vue'
import { getDestinations } from '@/services/destinations'

const destinations = getDestinations()
</script>

<template>
  <section class="home">
    <h1>All destinations</h1>

    <div class="destinations">
      <DestinationCard
        v-for="destination in destinations"
        :id="destination.id"
        :name="destination.name"
        :image="destination.image"
        :key="destination.id"
      />
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-bottom: 1.25rem;
}
</style>
