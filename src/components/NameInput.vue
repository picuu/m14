<script setup>
import { inject } from 'vue'

const menuName = inject('menuName')
</script>

<template>
  <section>
    <h2>PERSONALIZA TU CUBO</h2>

    <form @submit.prevent>
      <label>
        <span>Escribe tu nombre:</span>
        <input type="text" maxlength="25" v-model="menuName" />
      </label>
    </form>

    <p v-if="menuName.length > 0">
      El nombre <span class="bold">{{ menuName }}</span> aparecerá en el ticket.
    </p>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}

form {
  margin-bottom: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

input {
  width: fit-content;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  border: 1px solid rgba(0 0 0 / 0.1);
  outline: none;
  border-radius: 0.25rem;
}

.bold {
  font-weight: 700;
}
</style>
