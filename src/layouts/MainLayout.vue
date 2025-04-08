<script setup>
import { MenuFooter } from 'components'
import { ref } from 'vue'

const showVerticalNav = ref(false)

const onResize = (size) => {
  if (size.width >= 768) showVerticalNav.value = true
  else showVerticalNav.value = false
}
</script>

<template>
  <q-layout view="lHh Lpr lFf" class="layout">
    <MenuFooter vertical :hide="!showVerticalNav" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <MenuFooter :hide="showVerticalNav" />

    <q-resize-observer @resize="onResize" />
  </q-layout>
</template>

<style lang="scss" scoped></style>
