<script setup>
  import { ref, computed } from 'vue'

  const name = ref('John')
  const upperName = computed(() => name.value.toUpperCase())
</script>

<template>
  <div>
    <h3>Computed example</h3>

    <div>
      <p>The value is <span>{{ name }}</span>, and the computed value is <span>{{ upperName }}</span></p>
    </div>

    <small>Computed is used to make dynamic variables. Whenever the dependency changes, the value is calculated again.</small>
  </div>
</template>

<style scoped>
  span {
    font-weight: 700;
  }
</style>
