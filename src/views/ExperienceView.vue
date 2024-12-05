<script setup>
import { getExperience } from '@/services/experiences'
import { computed } from 'vue'

const { slug, destinationId } = defineProps({
  destinationId: Number,
  slug: String
})

const experience = computed(() => getExperience(destinationId, slug))
</script>

<template>
  <section>
    <h3>{{ experience.name }}</h3>
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <p>{{ experience.description }}</p>
  </section>
</template>

<style scoped>
section {
  margin-top: 2rem;
}

h3,
img {
  margin-bottom: 1rem;
}

img {
  max-width: 400px;
  height: auto;
  width: 100%;
}
</style>
