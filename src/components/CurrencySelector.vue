<script setup>
import { inject, ref } from 'vue'

const currency = inject('currency')
</script>

<template>
  <form @submit.prevent>
    <label class="custom-selector">
      <span>Currency</span>
      <select v-model="currency">
        <option selected value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
    </label>
  </form>
</template>

<style scoped>
.custom-selector {
  position: relative;
}

.custom-selector::after {
  content: '';
  border: 6px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  position: absolute;
  right: 12px;
  top: calc(50% - 1px);
}

.custom-selector span {
  position: absolute;
  top: -1.6rem;
  font-size: 0.8rem;
  color: rgba(0 0 0 / 0.75);
}

.custom-selector select {
  width: 100px;
  min-height: 35px;
  padding: 0.5rem 1rem;
  background-color: #eee;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  outline: none;
  appearance: none;
}

.custom-selector select option {
  padding: 0.5rem 1rem;
}
</style>
