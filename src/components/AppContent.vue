<script setup>
import ProfileHeader from '@/components/ProfileHeader.vue'
import MessagesHistory from '@/components/MessagesHistory.vue'
import InputBox from '@/components/InputBox.vue'

import { ref, nextTick, provide } from 'vue'

const sharedData = ref()
provide('isWritting', sharedData)

const chatContainer = ref(null)
const messages = ref([
  {
    id: Symbol(),
    content: 'Hi user!',
    createdAt: new Date()
  },
  {
    id: Symbol(),
    content: 'Clear the chat by typing `/clear`',
    createdAt: new Date()
  },
  {
    id: Symbol(),
    content: 'And for multiple lines, use `shift + enter`',
    createdAt: new Date()
  }
])

const handleNewMessage = async (messageContent) => {
  if (messageContent === 'clear' || messageContent === '/clear') return handleClearMessageHistory()

  const message = {
    id: Symbol(),
    content: messageContent,
    createdAt: new Date()
  }
  messages.value.push(message)

  await nextTick()
  scrollToBottom()
}

const handleClearMessageHistory = () => {
  messages.value = []
}

const scrollToBottom = () => {
  chatContainer.value.scrollTop = chatContainer.value.scrollHeight
}
</script>

<template>
  <div class="app">
    <main>
      <ProfileHeader @clear-message-history="handleClearMessageHistory" />
      <MessagesHistory :messages="messages" v-model="chatContainer" />
      <InputBox @submit-message="handleNewMessage" />
    </main>
  </div>
</template>

<style scoped>
main {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
}
</style>
