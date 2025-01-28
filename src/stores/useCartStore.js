import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('CartStore', () => {
  const items = ref([])

  const amount = computed(() => items.value.length)
  const isEmpty = computed(() => amount.value === 0)
  const groupedItems = computed(() => Object.groupBy(items.value, (item) => item.name))

  const addItem = (count, item) => {
    for (let i = 0; i < count; i++) items.value.push({...item})
  }

  return { items, amount, isEmpty, addItem }
})
