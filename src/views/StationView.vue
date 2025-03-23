<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useWaterStations } from '@composables'

const { stationName } = defineProps({
  stationName: String
})

const queryParams = {
  $query:
    `SELECT \`dia\`,\`estaci\`,\`nivell_absolut\`,\`percentatge_volum_embassat\`,\`volum_embassat\`` +
    ` WHERE \`estaci\` = '${stationName}'` +
    ` ORDER BY \`dia\`` +
    ` DESC LIMIT 100`
}

const { stations, getStations } = useWaterStations(queryParams)
getStations()

const maxCapacity = computed(() => {
  const storedVolume = stations.value[0].volum_embassat
  const storedPercentage = stations.value[0].percentatge_volum_embassat
  return ((100 * storedVolume) / storedPercentage).toFixed(2)
})

const formatedDate = (date) => {
  return computed(() => {
    const d = new Date(date)
    return d.toLocaleDateString('ca-ES')
  })
}

const router = useRouter()
const handleClick = () => {
  // router.back()
  router.push({ name: 'aigua' })
}
</script>

<template>
  <section>
    <h2>{{ stationName }}</h2>
    <p>Nivells d'aigua corresponent als últims 100 dies</p>

    <div class="section-content">
      <h3>Capacitat total: {{ maxCapacity }} (hm<sup>3</sup>)</h3>

      <ul v-for="(stationDay, index) in stations" :key="JSON.stringify(stationDay)">
        <li>
          <b>Dia {{ index + 1 }}: </b> {{ formatedDate(stationDay.dia) }}
        </li>
        <li><b>Nivell absolut sobre el nivell del mar: </b> {{ stationDay.nivell_absolut }} m</li>
        <li><b>Percentatge colum embassat: </b> {{ stationDay.percentatge_volum_embassat }} %</li>
        <li><b>Volum embassat: </b> {{ stationDay.volum_embassat }} (hm<sup>3</sup>)</li>
      </ul>
    </div>

    <button @click="handleClick">Tornar</button>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-weight: bold;
}

p {
  margin-bottom: 1rem;
}

.section-content {
  padding-block: 0.5rem;
  border: 1px solid rgba(0 0 0 / 0.15);
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

h3 {
  padding-inline: 1rem;
  font-weight: bold;
}

ul {
  padding-block: 0.5rem;
  list-style: circle;
}

ul:not(:last-of-type) {
  border-bottom: 1px solid rgba(0 0 0 / 0.15);
}

b {
  font-weight: bold;
}

button {
  padding: 0.35rem 0.6rem;
  background-color: transparent;
  border: 1px solid #09f;
  border-radius: 0.5rem;
  color: #09f;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

button:hover {
  background-color: rgba(0 153 255 / 0.5);
  color: white;
}
</style>
