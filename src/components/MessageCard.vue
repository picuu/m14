<script setup>
import { IconCheck, IconChecks } from '@tabler/icons-vue'
import { computed, onMounted } from 'vue'

const props = defineProps({
  message: Object
})

let isMessageRead = false
// onMounted(() => (isMessageRead = true))

const formatedDate = computed(() => {
  const date = new Date(props.message.createdAt)
  return date.toLocaleTimeString().slice(0, -3)
})
</script>

<template>
  <div class="message-wrapper">
    <p class="text-content">{{ message.content }}</p>
    <small class="message-info">
      <time>{{ formatedDate }}</time>
      <div class="read-confirmation">
        <IconCheck v-if="!isMessageRead" stroke="1.25" class="icon check-icon" />
        <IconChecks v-else stroke="1.25" class="icon checks-icon" />
      </div>
    </small>
  </div>
</template>

<style scoped>
.message-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem 0.5rem;
  max-width: 275px;
  text-overflow: clip;
  text-wrap: wrap;
  word-wrap: break-word;
  white-space: pre-wrap;
  background-color: #005d4a;
  border-radius: 0.5rem;
  color: #fff;
}

.message-wrapper::after {
  content: '';
  position: absolute;
  top: 0%;
  left: 100%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: #005d4a transparent transparent transparent;
  border-top-right-radius: 0.25rem;
}

.text-content {
  padding-right: 0.5rem;
}

.message-info {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.25rem;
  height: min-content;
  font-size: 0.65rem;
}

.read-confirmation {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  --size: 15px;

  width: var(--size);
  height: var(--size);
}
</style>
