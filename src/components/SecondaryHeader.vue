<script setup>
import { useRouter } from 'vue-router'

const { title } = defineProps({
  title: String,
})

const router = useRouter()

const handleClick = () => router.back()
</script>

<template>
  <q-header bordered class="header">
    <q-toolbar class="header-items">
      <q-btn class="header-item--icon" @click="handleClick" icon="arrow_back_ios_new" />
      <q-toolbar-title class="header-item--username">{{ title }}</q-toolbar-title>
      <q-space class="header-item-space" />
    </q-toolbar>
  </q-header>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--q-dark);
}

.header-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0 1rem;

  & .header-item--icon {
    justify-self: start;
  }

  & .header-item--username {
    font-size: 1rem;
    text-align: center;
  }
}
</style>
