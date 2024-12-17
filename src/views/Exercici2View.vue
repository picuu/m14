<script setup>
import { provide, ref } from 'vue'
import IncreaseButton from '@/components/ex2/IncreaseButton.vue'
import DecreaseButton from '@/components/ex2/DecreaseButton.vue'

const counterValue = ref(0)

provide('counterValue', counterValue)
</script>

<template>
  <section>
    <h2>Comptador</h2>

    <div>
      <IncreaseButton />
      <DecreaseButton />
      <p>El valor del comptador és: {{ counterValue }}</p>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1.5rem;
}
</style>
