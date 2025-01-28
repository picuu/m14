import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('ProductStore', () => {
  const products = ref([])

   const fill = async () => {
    products.value = (await import('../data/products.json')).default
  }

  return { products, fill }
})
