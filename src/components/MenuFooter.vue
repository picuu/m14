<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const { vertical: isVertical } = defineProps({
  vertical: Boolean,
  hide: Boolean,
})

const router = useRouter()
const currentTab = ref('/')

watch(currentTab, (newTab) => router.push(newTab))
</script>

<template>
  <q-footer v-show="!hide" bordered :class="isVertical ? 'menu vertical' : 'menu'">
    <q-tabs
      no-caps
      active-color="light"
      indicator-color="transparent"
      class="text-grey-6"
      v-model="currentTab"
      :vertical="isVertical"
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

<style lang="scss" scoped>
.menu {
  background-color: var(--q-dark);
}

.q-tab--active {
  color: #fff;
}

.q-footer.vertical {
  top: 0;
  left: 0;
  width: 72px;
  padding-top: 10vh;
  border-top: none;
  border-right: 1px solid rgba(255 255 255 / 0.28);
}
</style>
