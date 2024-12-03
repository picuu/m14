<script setup>
import { useRoute, useRouter } from 'vue-router'
import { watch } from 'vue'

const props = defineProps({
  id: Number
})

const route = useRoute()
const router = useRouter()

function navegarAmbHash() {
  router.push({ path: '/', hash: '#introduccio' })
}

const goToNextUser = () => {
  const nextId = parseInt(route.params.id) + 1
  router.push(`/route/desti/${nextId}`)
}
const goToPrevUser = () => {
  const nextId = parseInt(route.params.id) - 1
  router.push(`/route/desti/${nextId}`)
}

watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log(`Canvi de ruta: ${oldPath} → ${newPath}`)
  }
)
</script>

<template>
  <div>desti</div>
  <h1>Path: {{ route.path }}</h1>
  <h2>Id: {{ route.params.id }}</h2>
  <p>Query:{{ route.query }}</p>
  <p>hash:{{ route.hash }}</p>

  <br />

  <h3>Props</h3>
  <p>Id: {{ props.id }}</p>

  <br />

  <button @click="navegarAmbHash">Anar a home</button>
  <button @click="goToPrevUser">Ves al anterior link</button>
  <button @click="goToNextUser">Ves al següent link</button>
</template>
