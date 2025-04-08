<script setup>
import { useRouter } from 'vue-router'
import { messagesData } from 'src/mocks'
import { SecondaryHeader } from 'components'

const router = useRouter()

const onRight = (id) => {
  setTimeout(() => document.querySelector(`#${id}`).remove(), 500)
}

const getFullName = (user) => `${user.firstName} ${user.lastName}`
const getLastMessage = (conv) => conv.messages.at(-1).content

const handleClick = (conversationId) => router.push(`/messages/${conversationId}`)
</script>

<template>
  <q-page>
    <SecondaryHeader title="Messages" />

    <main>
      <q-list>
        <q-slide-item
          v-for="conversation in messagesData"
          :key="conversation.id"
          @right="() => onRight(conversation.id)"
          :id="conversation.id"
          right-color="red"
          @click="() => handleClick(conversation.id)"
          class="conversation-entry"
        >
          <template v-slot:right>
            <div class="delete-tip">Delete conversation... <q-icon right name="delete" /></div>
          </template>

          <q-item>
            <q-item-section avatar>
              <q-avatar size="3.5rem">
                <q-img :src="conversation.from.picture" spinner-color="white" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1" class="username">
                {{ getFullName(conversation.from) }}
              </q-item-label>
              <q-item-label caption lines="1">
                {{ getLastMessage(conversation) }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-slide-item>
      </q-list>
    </main>
  </q-page>
</template>

<style lang="scss" scoped>
.conversation-entry {
  cursor: pointer;
}

.username {
  font-weight: 600;
}
</style>
