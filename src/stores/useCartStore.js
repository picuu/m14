import { groupBy, orderBy } from "lodash"
import { acceptHMRUpdate, defineStore } from "pinia"
import { computed, ref } from "vue"
import { useAuthUserStore } from "./useAuthUserStore"
import { useLocalStorage } from "@vueuse/core"

const options = { historyEnabled: true }

export const useCartStore = defineStore('CartStore', () => {
  // const items = ref([])
  const items = ref(useLocalStorage('CartStore:items', []))

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

  const checkout = () => {
    const authUserStore = useAuthUserStore()
    alert(`${authUserStore.username} name just bought ${amount.value} items at a total of $${totalPrice.value}`)
  }

  const $reset = () => {
    items.value = []
  }

  return { items, amount, isEmpty, grouped, totalPrice, groupCount, addItem, clearItem, setItemCount, checkout, $reset }
},options)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
