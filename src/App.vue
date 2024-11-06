<script setup>
import AppContent from '@/components/AppContent.vue'
</script>

<template>
  <AppContent />

  <footer class="credits">
    <span>Made by <a href="https://carloscapo.com" target="_blank" rel="noopener noreferrer">carloscapo</a></span>
    <a href="https://github.com/picuu/m14/tree/pr02-chat" target="_blank" rel="noopener noreferrer">GitHub repo</a>
  </footer>
</template>

<style>
.app {
  position: relative;
  width: 380px;
  height: 100%;
  margin-top: -1.25rem;
  aspect-ratio: 8 / 15;
  border: 6px solid #111;
  border-radius: 2rem;
  overflow: clip;
}

.scrolleable {
  aspect-ratio: 8 / 15;
  overflow: clip;
  /* padding-bottom: 20px; */
}

/* .simplebar-track {
  margin-bottom: 50px;
} */

.credits {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding-top: 0.5rem;
  font-size: 0.85rem;
}
</style>
