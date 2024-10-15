<script setup>
  import { ref } from 'vue'

  const show = ref(false)
</script>

<template>
  <div>
    <h3>Directive v-show example</h3>

    <button @click="show = !show">Show content</button>
    
    <div>
      <p v-show="show">The 'show' variable is now set tot true!</p>
    </div>

    <small>The directive v-show always render contet, but hides it until a condition is true. It has a very similar functionality as the v-if directive</small>
  </div>
</template>

<style scoped></style>
