<script setup>
import { StoriesHeader, PostsList, MenuFooter } from 'components'
</script>

<template>
  <q-page class="q-page">
    <StoriesHeader />

    <div class="main">
      <PostsList />
    </div>

    <MenuFooter />
  </q-page>
</template>

<style scoped>
.q-page {
  overflow-x: clip;
}

.main {
  /* margin-top: 0.5rem; */
  display: grid;
  grid-template-columns: 1fr;
  justify-items: stretch;
  /* padding: 1rem; */
}
</style>
