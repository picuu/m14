<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useFetch } from '@/composables'

const { year } = defineProps({
  year: Number,
})

const router = useRouter()
const { data, getData } = useFetch()

const queryParams = { any: year }
getData(queryParams)

const centers = computed(() => [...new Set(data.value.map((i) => i.tipus_de_centres))])

const handleClick = () => {
  router.push(`/anys`)
}
</script>

<template>
  <section>
    <h2>Informe de d'any {{ year }}</h2>

    <ul>
      <li v-for="center in centers" :key="center">
        <RouterLink :to="`/detall_centre/${center}/${year}`">{{ center }}</RouterLink>
      </li>
    </ul>

    <button @click="handleClick" class="go-back-btn">Tornar</button>
  </section>
</template>

<style scoped>
h2 {
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
