<script setup>
import { useRouter } from 'vue-router'
import { useUsers } from 'src/composables'

const router = useRouter()
const { users, getUsers } = useUsers()

const queryParams = {
  page: Math.round(Math.random() * 5),
  limit: 20,
}

getUsers(queryParams)

const handleClick = (userId) => router.push(`/user/${userId}`)
</script>

<template>
  <header v-if="users.data">
    <q-avatar v-for="user in users.data" :key="user.id" @click="() => handleClick(user.id)">
      <q-img :src="user.picture" spinner-color="white" class="avatar-img" />
    </q-avatar>
  </header>

  <header v-else>
    <q-circular-progress indeterminate rounded size="50px" color="amber" class="loader" />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  gap: 1.25rem;
  padding: 0.65rem 1rem;
  border-bottom: 1px solid rgba(255 255 255 / 0.25);
  overflow-x: scroll;
  scrollbar-width: thin;
}

.q-avatar {
  width: 1.125em;
  height: 1.125em;
  cursor: pointer;
}

.q-avatar::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  background: linear-gradient(
    195deg,
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
  border-radius: 999vw;
  border: 2.5px solid var(--q-dark);
  cursor: pointer;
}

.loader {
  margin-inline: auto;
}
</style>
