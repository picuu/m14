<script setup>
import { computed, ref, watch } from 'vue'
import FilterInput from '@/components/ex3/FilterInput.vue'

const filter = ref('')

const users = [
  {
    id: 1,
    name: 'Francesc'
  },
  {
    id: 2,
    name: 'Marta'
  },
  {
    id: 3,
    name: 'Pere'
  }
]

const filteredUsers = computed(() => users.filter((user) => user.name.toLowerCase().includes(filter.value.toLowerCase())))
</script>

<template>
  <section>
    <h2>Llistat d'Usuaris</h2>

    <div>
      <FilterInput v-model="filter" />

      <ul>
        <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1.5rem;
}

section > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

form input {
  padding: 0.25rem 0.5rem;
}
</style>
