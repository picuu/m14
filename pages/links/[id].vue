<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Link } from '~~/types';
import { FormKitNode } from '@formkit/core'

definePageMeta({
  middleware: ["auth"],
});

const route = useRoute()
const { link, find, update} = useLinks()
const linkId = computed(() => Number(route.params.id))

await find(linkId.value)

async function handleUpdate (payload: Partial<Link>, node?: FormKitNode) {
  try {
    await update(linkId.value, payload);
  } catch (e) {
    handleInvalidForm(e, node);
  }
}
</script>
<template>
  <h1>Update Link</h1>
  <GoBack>or go back to links</GoBack>

  <FormKit type="form" submit-label="Update Link" @submit="handleUpdate">
    <FormKit type="text" name="short_link" label="Short Link" :value="link.short_link" />
    <FormKit type="url" name="full_link" label="Full Link" v-model="link.full_link" />
  </FormKit>
</template>
