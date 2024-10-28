<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['addContact'])

const contactName = ref('')
const phoneNumber = ref(0)

const isError = ref(false)
const errorMessage = ref('')

const handleSubmit = () => {
  isError.value = false

  if (!contactName.value || !phoneNumber.value || contactName.value.trim() === '') {
    errorMessage.value = 'Invalid values, data was not saved'
    isError.value = true
    return
  }
  if (phoneNumber.value.toString().length !== 9) {
    errorMessage.value = 'Phone number must have 9 digits'
    isError.value = true
    return
  }

  const newContact = { id: Symbol(), name: contactName.value.trim(), phone: phoneNumber.value }
  emit('addContact', newContact)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <label>
      <span>Contact name<sup>*</sup></span>
      <input type="text" placeholder="John Doe" v-model="contactName" required />
    </label>

    <label>
      <span>Phone number<sup>*</sup></span>
      <input type="number" placeholder="612345678" v-model="phoneNumber" required />
    </label>

    <button type="submit">Save contact</button>
  </form>

  <span v-if="isError" class="error">{{ errorMessage }}</span>
</template>

<style scoped>
sup {
  color: red;
}

.error {
  color: red;
  font-size: 0.75rem;
  margin-top: 0.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: grid;
  gap: 0.25rem;
}

input {
  width: fit-content;
  padding: 0.25rem 0.5rem;
  background-color: rgba(25 220 150 / 0.5);
  border: none;
  border-radius: 0.25rem;
  color: #fff;
}

::-webkit-input-placeholder {
  color: #ccc;
}

button {
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: rgba(25 220 150 / 0.9);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

button:hover {
  background-color: rgba(25 220 150 / 1);
}

button:active {
  background-color: #15b283;
}

button:focus {
  outline: none;
}
</style>
