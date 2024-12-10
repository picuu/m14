<script setup>
import { computed } from 'vue'
import { getDestination } from '@/services/destinations'
import DestinationExperiences from '@/components/DestinationExperiences.vue'
import { useRoute, useRouter } from 'vue-router'

const { id } = defineProps({
  id: Number
})

const router = useRouter()
const route = useRoute()
const destination = computed(() => getDestination(id))

const handleGoBack = () => {
  if (route.name === 'destination') router.push('/')
  else router.push(`/destination/${id}`)
}
</script>

<template>
  <section>
    <section>
      <h2>{{ destination.name }}</h2>

      <button type="button" class="btn go-back" @click="handleGoBack">go back</button>

      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <DestinationExperiences :destinationId="id" />
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1.25rem;
}
</style>
