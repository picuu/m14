<script setup>
  import { ref } from 'vue'

  const isLogged = ref(false)
</script>

<template>
  <div>
    <h3>Directive v-if example</h3>

    <div>
      <p v-if="isLogged">Welcome user!</p>
      <p v-else>Log in, please</p>
    </div>

    <small>The directive v-if renders its content based on a condiiton. It help us to make conditional rendering</small>
  </div>
</template>

<style scoped></style>
