<script setup>
import KeyForSample from '@/components/KeyForSample.vue'
import WatchArrayExample from '@/components/WatchArrayExample.vue'
</script>

<template>
  <main>
    <KeyForSample />

    <br /><br />

    <WatchArrayExample />
  </main>
</template>

<style scoped>
main {
  width: min(100% - 4rem, 1000px);
  margin-inline: auto;
  padding-block: 2rem;
}
</style>
