<script setup lang="ts">
import axios from 'axios'
import { nanoid } from 'nanoid';
import { FormKitNode } from '@formkit/core'
import { useRouter } from 'vue-router'
import { LoginPayload } from '~~/types';

const router = useRouter()

definePageMeta({
  middleware: ["auth"],
});

async function createLink (payload: LoginPayload, node?: FormKitNode) {
  try {
    await axios.post("/links", {
      ...payload,
      short_link: nanoid(8)
    })
    router.push("/links")
  } catch (e) {
    handleInvalidForm(e, node)
  }
}
</script>
<template>
  <h1>Create New Link</h1>
  <GoBack>or go back to links</GoBack>

  <FormKit type="form" submit-label="Create Link" @submit="createLink">
    <FormKit label="Link" type="url" name="full_link" />
  </FormKit>
</template>
