<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useFetch } from '@/composables'

const { center, year } = defineProps({
  center: String,
  year: Number,
})

const router = useRouter()
const { data, getData } = useFetch()

const queryParams = { tipus_de_centres: center, any: year }
getData(queryParams)

const getPercentage = (total, value) => ((parseInt(value) * 100) / parseInt(total)).toFixed(2)

const formationTotal = computed(() => {
  return parseInt(data.value[0].formaci_dones) + parseInt(data.value[0].formaci_homes)
})

const mobilityTotal = computed(() => {
  return parseInt(data.value[0].mobilitat_dones) + parseInt(data.value[0].mobilitat_homes)
})

const handleClick = () => {
  router.push(`/detall_any/${year}`)
}
</script>

<template>
  <section>
    <h2>Informe sobre Beques i Mobiliat a {{ center }}</h2>

    <h3>Any: {{ year }}</h3>

    <ul v-if="data.length > 0">
      <li>
        <b>Beques Dones: </b> {{ data[0].formaci_dones }} ({{
          getPercentage(formationTotal, data[0].formaci_dones)
        }}%)
      </li>
      <li>
        <b>Beques Homes: </b> {{ data[0].formaci_homes }} ({{
          getPercentage(formationTotal, data[0].formaci_homes)
        }}%)
      </li>
      <li>
        <b>Mobilitat Dones: </b> {{ data[0].mobilitat_dones }} ({{
          getPercentage(mobilityTotal, data[0].mobilitat_dones)
        }}%)
      </li>
      <li>
        <b>Mobilitat Homes: </b> {{ data[0].mobilitat_homes }} ({{
          getPercentage(mobilityTotal, data[0].mobilitat_homes)
        }}%)
      </li>
    </ul>

    <p v-else>Carregant informació</p>

    <button @click="handleClick" class="go-back-btn">Tornar</button>
  </section>
</template>

<style scoped>
h2,
h3 {
  margin-bottom: 1rem;
  font-weight: bold;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: rgb(12, 211, 128);
  text-decoration: none;
}

.go-back-btn {
  margin-top: 1.5rem;
}
</style>
