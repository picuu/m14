<script setup>
import { RouterLink } from 'vue-router'

const { id, name, image } = defineProps({
  id: Number,
  name: String,
  image: String
})
</script>

<template>
  <article>
    <RouterLink :to="`/destination/${id}`">
      <h2>{{ name }}</h2>
      <img :src="`/images/${image}`" :alt="name" />
    </RouterLink>
  </article>
</template>
