<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import ExperienceCard from '@/components/ExperienceCard.vue'
import { getExperiences } from '@/services/experiences'

const { destinationId } = defineProps({
  destinationId: Number
})

const experiences = computed(() => getExperiences(destinationId))
</script>

<template>
  <section class="experiences">
    <h3>Experiences</h3>

    <div class="cards">
      <ExperienceCard
        v-for="experience in experiences"
        :destinationId="destinationId"
        :expSlug="experience.slug"
        :name="experience.name"
        :image="experience.image"
        :key="experience.slug"
      />
    </div>

    <RouterView />
  </section>
</template>

<style scoped>
h3 {
  margin-bottom: 1.25rem;
}
</style>
