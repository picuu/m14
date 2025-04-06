<script setup></script>

<template>
  <q-footer bordered class="bg-grey-3 text-primary">
    <q-tabs
      no-caps
      active-color="primary"
      indicator-color="transparent"
      class="text-grey-8"
      v-model="tab"
    >
      <q-tab name="home" label="Home" />
      <q-tab name="create" label="Create" />
      <q-tab name="messages" label="Messages" />
    </q-tabs>
  </q-footer>
</template>
