import { groupBy, orderBy } from "lodash"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('CartStore', () => {
  const items = ref([])

  const amount = computed(() => items.value.length)
  const isEmpty = computed(() => amount.value === 0)
  const grouped = computed(() => {
    const orderedBy = orderBy(items.value, ['name'])
    const groupedBy = groupBy(orderedBy, (item) => item.name)
    return groupedBy
  })

  // Sumem les quantitats dels productes a l'accumulador, que comença en 0
  const totalPrice = computed(() => items.value.reduce((acc, item) => acc += item.price, 0))
  
  const groupCount = (name) => grouped.value[name].length
  
  const addItem = (count, item) => {
    for (let i = 0; i < count; i++) items.value.push({...item})
  }

  const clearItem = (name) => {
    items.value = items.value.filter((item) => item.name !== name)
  }

  const setItemCount = (item, count) => {
    clearItem(item.name)
    addItem(count, item)
  }

  const $reset = () => {
    items.value = []
  }

  return { items, amount, isEmpty, grouped, totalPrice, groupCount, addItem, clearItem, setItemCount, $reset }
})
