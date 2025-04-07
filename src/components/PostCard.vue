<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const { id, name, avatar, picture, likes, description } = defineProps({
  id: String,
  name: String,
  avatar: String,
  picture: String,
  likes: Number,
  description: String,
})

const username = computed(() => name.toLowerCase())

const router = useRouter()

const handleClick = () => {
  router.push(`/user/${id}`)
}
</script>

<template>
  <q-card class="post" flat>
    <q-item class="header" clickable @click="handleClick">
      <q-item-section avatar>
        <q-avatar>
          <img :src="avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="username">{{ username }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="more_horiz" size="xs" class="action-icon" />
      </q-item-section>
    </q-item>

    <!-- <q-separator /> -->
    <img :src="picture" alt="post title" />

    <q-card-section vertical class="footer">
      <q-card-section horizontal class="post-actions">
        <q-icon name="favorite_border" size="md" class="action-icon" />
        <q-icon name="chat_bubble_outline" size="md" class="action-icon" />
        <q-icon name="send" size="md" class="action-icon" />
        <q-icon name="bookmark_border" size="md" class="action-icon" />
      </q-card-section>

      <q-card-section class="post-footer-text post-likes">{{ likes }} likes</q-card-section>

      <q-card-section class="post-footer-text post-description">{{ description }}</q-card-section>

      <q-card-section class="post-footer-text post-see-comments">See all comments</q-card-section>
    </q-card-section>
  </q-card>
</template>

<style scoped>
* {
  --px: 1rem;
  --py: 0.975rem;
}

.post {
  padding-bottom: 8px;
}

.header {
  align-items: center;
  padding: var(--py) var(--px);
}

.header .action-icon {
  margin-right: -8px;
}

.username {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.035rem;
  padding-top: 0.2rem;
}

.footer {
  padding-block: 0;
  padding-inline: var(--px);
}

.post-actions {
  margin-block: 4px;
}

.post-actions .action-icon:first-of-type {
  margin-left: -8px;
}

.post-actions .action-icon:last-of-type {
  margin-left: auto;
  margin-right: -8px;
}

.action-icon {
  padding: 8px;
  cursor: pointer;
}

.post-footer-text {
  padding: 0;
}

.post-likes {
  font-weight: 600;
}

.post-see-comments {
  font-weight: 300;
  opacity: 0.7;
  cursor: pointer;
}
</style>
