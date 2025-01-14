<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useResource } from '@/composables/useResource'

const route = useRoute()

const post = ref()
const user = ref()

const postId = ref(route.params.id)

const fetchData = async () => {
  const { data: postData, fetchData: fetchPost } = useResource(`/posts/${postId.value}`)
  await fetchPost()
  post.value = postData.value

  const { data: userData, fetchData: fetchUser } = useResource(`/users/${post.value.userId}`)
  await fetchUser()
  user.value = userData.value
}

fetchData()
</script>

<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
  <div v-else>Loading...</div>
</template>
