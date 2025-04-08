<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const { user } = useAuth()
</script>

<template>
  <div v-if="user !== null">
    <p><strong>User Name:</strong> {{ user.name }}</p>
    <p><strong>User Email:</strong> {{ user.email }}</p>
  </div>
</template>