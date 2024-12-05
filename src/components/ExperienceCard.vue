<script setup>
import { RouterLink } from 'vue-router'

const { id, name, image } = defineProps({
  destinationId: Number,
  expSlug: String,
  name: String,
  image: String
})
</script>

<template>
  <article class="card">
    <RouterLink :to="`/destination/${destinationId}/experience/${expSlug}`">
      <img :src="`/images/${image}`" :alt="name" />
      <h2 class="card__text">{{ name }}</h2>
    </RouterLink>
  </article>
</template>
