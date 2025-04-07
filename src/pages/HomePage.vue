<script setup>
import { StoriesHeader, PostsList } from 'components'
</script>

<template>
  <q-page class="q-page">
    <StoriesHeader />

    <div class="main">
      <PostsList />
    </div>
  </q-page>
</template>

<style scoped>
.q-page {
  overflow-x: clip;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
