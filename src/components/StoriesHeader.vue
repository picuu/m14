<script setup>
import { useApi } from '../composables'

const { data, getData } = useApi()

const apiPage = Math.round(Math.random() * 5)

getData(`/user?page=${apiPage}&limit=20`)
</script>

<template>
  <header v-if="data.data">
    <q-avatar v-for="user in data.data" :key="user.id">
      <img :src="user.picture" class="avatar-img" />
    </q-avatar>
  </header>

  <header v-else>
    <q-circular-progress indeterminate rounded size="50px" color="amber" class="loader" />
  </header>
</template>

<style scoped>
header {
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(0 0 0 / 0.25);
  overflow-x: scroll;
  scrollbar-width: thin;
}

.q-avatar {
  width: 1.125em;
  height: 1.125em;
}

.q-avatar::before {
  content: '';
  position: absolute;
  top: -2.5px;
  left: -2.5px;
  width: calc(100% + 5px);
  height: calc(100% + 5px);
  background: linear-gradient(
    200deg,
    rgba(118, 56, 250, 1) 0%,
    rgba(211, 0, 197, 1) 25%,
    rgba(255, 0, 105, 1) 50%,
    rgba(255, 122, 0, 1) 75%,
    rgba(255, 214, 0, 1) 100%
  );
  border-radius: 999vw;
  z-index: -1;
}

.avatar-img {
  border: 2.5px solid #fff;
}

.loader {
  margin-inline: auto;
}
</style>
