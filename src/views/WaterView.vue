<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useWaterStations } from '@composables'

const { stations, getStations } = useWaterStations()
getStations()

const uniqueStations = computed(() =>
  stations.value.filter(
    (station, index, arr) => arr.findIndex((s) => s.estaci === station.estaci) === index
  )
)
</script>

<template>
  <section>
    <h2>Estacions</h2>

    <div class="section-content">
      <ul>
        <li v-for="station in uniqueStations" :key="station.estaci">
          <RouterLink :to="`/aigua/${station.estaci}`">{{ station.estaci }}</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-weight: bold;
}

ul {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0 0 0 / 0.15);
  border-radius: 0.5rem;
  padding: 0;
  list-style: none;
}

li {
  padding: 0.5rem 0.75rem;
}

li:not(:last-of-type) {
  border-bottom: 1px solid rgba(0 0 0 / 0.15);
}

a {
  color: #06f;
}
</style>
