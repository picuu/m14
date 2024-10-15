<script setup>
  import { ref } from 'vue'

  const userName = ref('')
</script>

<template>
  <div>
    <h3>Directive v-model example</h3>

    <div>
      <p>The user name is <span>{{ userName }}</span></p>
      <form>
        <input type="text" v-model="userName" placeholder="Write your name..." />
      </form>
    </div>

    <small>The directives v-model makes a bidirectional channel between the view (DOM) and the model (our javascript)</small>
  </div>
</template>

<style scoped>
  span {
    font-weight: 700;
  }

  form input {
    padding: .35rem .85rem;
    background-color: rgba(255 255 255 /.1);
    border: 1px solid rgba(255 255 255 / .25);
    outline: none;
    border-radius: .25rem;
    font-family: system-ui, sans-serif;
    color: #eee;
  }
</style>
