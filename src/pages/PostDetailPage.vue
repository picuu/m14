<script setup>
import { SecondaryHeader, PostCard } from 'components'
import { usePost } from 'src/composables'
import { computed } from 'vue'

const { postId } = defineProps({
  postId: String,
})

const { post, getPost } = usePost()
getPost(postId)

const username = computed(() => post.value.owner.firstName.toLowerCase())
</script>

<template>
  <q-page>
    <template v-if="'id' in post">
      <SecondaryHeader :title="`Post from ${username}`" />

      <main>
        <PostCard
          :id="post.owner.id"
          :name="post.owner.firstName"
          :avatar="post.owner.picture"
          :picture="post.image"
          :likes="post.likes"
          :description="post.text"
          :tags="post.tags"
        />
      </main>
    </template>

    <template v-else>
      <q-inner-loading :showing="true">
        <q-spinner-gears size="50px" color="light" />
      </q-inner-loading>
    </template>
  </q-page>
</template>
