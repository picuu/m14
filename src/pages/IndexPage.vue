<script setup>
import { StoriesHeader } from 'components'
</script>

<template>
  <q-page class="q-page">
    <StoriesHeader />

    <div class="main"></div>
  </q-page>
</template>

<style scoped>
.q-page {
  overflow-x: clip;
}

.main {
  margin-top: 2rem;
}
</style>
