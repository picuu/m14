<script setup>
import { IconSearch } from '@tabler/icons-vue'
import { inject } from 'vue'

const isWritting = inject('isWritting')

const emit = defineEmits(['clearMessageHistory'])
</script>

<template>
  <section class="profile-header">
    <div class="contact-info">
      <img class="contact-avatar" src="/profile-image.jpeg" alt="user profile image" />
      <div class="contact-name">
        <h2>Carlos Capó</h2>
        <span>{{ isWritting?.value ? 'writting...' : 'online' }}</span>
      </div>
    </div>
    <div class="search" @click="emit('clearMessageHistory')">
      <IconSearch class="search-icon" stroke="{1.25}" />
    </div>
  </section>
</template>

<style scoped>
.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #2c2d2d;
  border-bottom: 1px solid #232223;
  color: #fff;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.contact-avatar {
  --size: 42px;

  width: var(--size);
  height: var(--size);
  aspect-ratio: 1/1;
  border-radius: 50%;
}

.contact-name {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.contact-name h2 {
  font-size: 1rem;
  font-weight: 600;
}

.contact-name span {
  font-size: 0.9rem;
  color: rgba(255 255 255 / 0.8);
}

.search-icon {
  --size: 20px;

  width: var(--size);
  height: var(--size);
  padding: 1px;
  transform: rotate(90deg);
  cursor: pointer;
}
</style>
