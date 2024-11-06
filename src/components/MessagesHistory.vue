<script setup>
import MessageCard from './MessageCard.vue'

const chatContainer = defineModel()

const props = defineProps({
  messages: Array
})
</script>

<template>
  <section class="messages-history" role="log" aria-live="polite">
    <div class="messages" ref="chatContainer">
      <span v-if="props.messages.length > 0" class="date-label">Today</span>
      <MessageCard v-for="message in props.messages" :key="message.id" :message="message" />
    </div>
  </section>
</template>

<style scoped>
.messages-history {
  background-image: url(/chat-background.png);
  background-size: 95%;
  background-blend-mode: overlay;
  background-color: #2c2d2d;
}

.date-label {
  width: fit-content;
  margin: 1rem auto;
  padding: 0.4rem 0.65rem;
  display: block;
  background-color: #1d1d1c;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.messages {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.2rem;
  padding-inline: 1.125rem;
  height: 600px;
  margin-left: auto;
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>
