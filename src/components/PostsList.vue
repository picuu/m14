<script setup>
import { ref, watch } from 'vue'
import { PostCard, PostSkeleton } from 'components'
import { usePosts } from '../composables'

let isFirstRender = true

const posts = ref([])
const { posts: apiPosts, getPosts } = usePosts()

const queryParams = {
  page: Math.round(Math.random() * 5),
  limit: 5,
}

const onLoad = (_, done) => {
  let waitTime = 1000

  if (isFirstRender) {
    waitTime = 0
    isFirstRender = false
  }

  setTimeout(async () => {
    queryParams.page = Math.round(Math.random() * 5)
    getPosts(queryParams)
    done()
  }, waitTime)
}

watch(apiPosts, (newPosts) => {
  posts.value.push(...newPosts.data)
})
</script>

<template>
  <q-infinite-scroll @load="onLoad" :offset="250">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :id="post.owner.id"
      :name="post.owner.firstName"
      :avatar="post.owner.picture"
      :picture="post.image"
      :likes="post.likes"
      :description="post.text"
    />
    <template v-slot:loading>
      <PostSkeleton />
    </template>
  </q-infinite-scroll>
</template>

<style scoped></style>
