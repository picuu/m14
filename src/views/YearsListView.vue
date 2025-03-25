<script setup>
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useFetch } from '@/composables'

const router = useRouter()
const { data, getData } = useFetch()
getData()

const years = computed(() => [...new Set(data.value.map((i) => i.any))])

const handleClick = () => {
  router.push('/')
}
</script>

<template>
  <section>
    <h2>Llistat d'anys</h2>

    <ul>
      <li v-for="year in years" :key="year">
        <RouterLink :to="`/detall_any/${year}`">{{ year }}</RouterLink>
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

a {
  color: rgb(12, 211, 128);
  text-decoration: none;
}

.go-back-btn {
  margin-top: 1.5rem;
}
</style>
