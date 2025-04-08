<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentTab = ref('/')

watch(currentTab, (newTab) => router.push(newTab))
</script>

<template>
  <q-footer bordered class="menu">
    <q-tabs
      no-caps
      active-color="light"
      indicator-color="transparent"
      class="text-grey-6"
      v-model="currentTab"
    >
      <q-tab name="/">
        <q-icon name="home" size="md" class="menu-icon" />
      </q-tab>
      <q-tab disable name="">
        <q-icon name="explore" size="md" class="menu-icon" />
      </q-tab>
      <q-tab disable name="">
        <q-icon name="movie_filter" size="md" class="menu-icon" />
      </q-tab>
      <q-tab disable name="">
        <q-icon name="add_circle_outline" size="md" class="menu-icon" />
      </q-tab>
      <q-tab name="/messages">
        <q-icon name="send" size="md" class="menu-icon" />
      </q-tab>
      <q-tab name="/profile">
        <q-icon name="account_circle" size="md" class="menu-icon" />
      </q-tab>
    </q-tabs>
  </q-footer>
</template>

<style scoped>
.menu {
  background-color: var(--q-dark);
}

.q-tab--active {
  color: #fff;
}
</style>
