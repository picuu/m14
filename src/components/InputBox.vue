<script setup>
import { IconMoodSmile, IconPaperclip, IconMicrophone, IconSend2 } from '@tabler/icons-vue'
import { computed, inject, ref } from 'vue'

const emit = defineEmits(['submitMessage'])

const message = ref('')
const isWritting = computed(() => message.value.length > 0)

const isWrittingShared = inject('isWritting')
isWrittingShared.value = isWritting

const handleSubmit = () => {
  if (message.value === '') return
  emit('submitMessage', message.value)
  message.value = ''
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSubmit()
  }
}
</script>

<template>
  <section class="input-box">
    <div class="emojis">
      <IconMoodSmile stroke="1.25" class="icon mood-smile-icon" />
    </div>
    <div class="attachments">
      <IconPaperclip stroke="1.25" class="icon paperclip-icon" />
    </div>
    <form @submit.prevent="handleSubmit">
      <textarea v-model.trim="message" @keydown="handleKeyPress" name="message" placeholder="Type a message"></textarea>
    </form>
    <div class="message-input">
      <IconMicrophone v-if="!isWritting" stroke="1.25" class="icon microphone-icon" />
      <IconSend2 v-else stroke="1.25" class="icon send-icon" @click="handleSubmit" />
    </div>
  </section>
</template>

<style scoped>
.input-box {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: end;
  gap: 0.35rem;
  padding: 0.25rem 0.5rem;
  background-color: #2c2d2d;
  border-top: 1px solid #232223;
  color: #fff;
}

.icon {
  --size: 40px;

  width: var(--size);
  height: var(--size);
  padding: 10px;
}

.icon:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.3rem;
}

.icon.paperclip-icon {
  transform: rotate(180deg);
}

.icon.send-icon {
  cursor: pointer;
}

form {
  height: 100%;
  width: 100%;
}

form textarea {
  width: 210px;
  height: auto;
  max-height: calc(1rem * 6.25);
}

form textarea {
  height: 100%;
  padding: 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.3rem;
  background: transparent;
  color: #fff;
  font-size: 0.9rem;
  field-sizing: content;
  resize: none;
  scrollbar-width: none;
}

form textarea:hover {
  background-color: rgba(255 255 255 / 0.1);
}
</style>
