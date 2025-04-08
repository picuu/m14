<script setup>
import { computed } from 'vue'
import { SecondaryHeader } from 'components'
import { messagesData } from 'src/mocks'
import { formatDate } from 'src/utils'

const { conversationId } = defineProps({
  conversationId: String,
})

const conversation = messagesData.find((conv) => conv.id === conversationId)

const username = computed(() => conversation.from.firstName.toLowerCase())
const timestampLabel = computed(() => formatDate(conversation.messages.at(0).timestamp))

const isSent = (message) => message.sentBy !== conversation.from.id
</script>

<template>
  <q-page>
    <SecondaryHeader :title="`chat with ${username}`" />

    <main class="messages-list">
      <q-chat-message :label="timestampLabel" class="timestamp" />

      <q-chat-message
        v-for="message in conversation.messages"
        :key="message.id"
        :text="[message.content]"
        :sent="isSent(message)"
        :bg-color="isSent(message) ? 'primary' : 'grey'"
        :text-color="isSent(message) ? 'white' : 'black'"
        :avatar="isSent(message) ? undefined : conversation.from.picture"
        :class="isSent(message) ? 'msg sent' : 'msg received'"
        size="8"
      />
    </main>
  </q-page>
</template>

<style lang="scss" scoped>
.messages-list {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.125rem;
  padding: 0.5rem 14px;
  padding-bottom: 3rem;
  overflow-y: scroll;
  scrollbar-width: none;
}

.timestamp {
  margin-inline: auto;
  opacity: 0.8;
}

.msg.sent {
  margin-right: 2px;
}

.msg.received {
  margin-right: auto;
}
</style>
