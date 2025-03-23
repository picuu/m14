<script setup>
import { computed, reactive, ref } from 'vue'

const isAddingElement = ref(false)
const toggleIsAddingElement = () => {
  isAddingElement.value = !isAddingElement.value

  itemName.value = ''
  isPrioritary.value = false
  isBougth.value = false
}

const cartItems = reactive([])
const cartItemsReversed = computed(() => [...cartItems].reverse())

const getItemStyles = (item) => {
  const color = item.altaPrioritat ? 'red' : item.comprat ? 'green' : ''
  const textDecoration = item.comprat ? 'line-through' : 'none'
  return { color, textDecoration }
}

const itemName = ref('')
const isPrioritary = ref(false)
const isBougth = ref(false)

const handleSubmit = () => {
  const item = {
    id: cartItems.length + 1,
    label: itemName.value,
    comprat: isPrioritary.value,
    altaPrioritat: isBougth.value
  }
  cartItems.push(item)
}
</script>

<template>
  <section>
    <h2>Llista amb prioritats</h2>

    <div class="section-content">
      <div v-if="isAddingElement" class="controls">
        <form @submit.prevent="handleSubmit">
          <button type="reset" @click="toggleIsAddingElement" class="cancel-btn">Cancel·lar</button>

          <div class="item-input">
            <input type="text" placeholder="Add an item" v-model="itemName" />

            <label>
              <input type="checkbox" v-model="isPrioritary" />
              <span>Prioritari</span>
            </label>

            <label>
              <input type="checkbox" v-model="isBougth" />
              <span>Comprat</span>
            </label>

            <button type="submit">Afegir</button>
          </div>
        </form>
      </div>

      <div v-else class="controls">
        <button @click="toggleIsAddingElement">Afegir element</button>
      </div>

      <ul v-if="cartItems.length > 0">
        <li v-for="item in cartItemsReversed" :key="item.id" :style="getItemStyles(item)">
          <span>{{ item.label }}</span>
          <span> - Prioritari: {{ item.altaPrioritat }}</span>
          <span> - Comprat: {{ item.comprat }}</span>
        </li>
      </ul>

      <div v-else>
        <p>No hi tens cap element a la llista</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  font-weight: bold;
}

.controls {
  margin-bottom: 1rem;
}

.controls button.cancel-btn {
  margin-bottom: 0.5rem;
}

.item-input {
  display: flex;
  gap: 0.5rem;
}

.item-input label {
  display: flex;
  gap: 0.25rem;
}
</style>
