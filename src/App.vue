<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "./stores/useProductStore";
import { storeToRefs } from "pinia";
import { useCartStore } from "./stores/useCartStore";

const productStore = useProductStore()
const cartStore = useCartStore()

productStore.fill()
const { products } = storeToRefs(productStore)

cartStore.$onAction(({ name, args, after, onError }) => {
  if (name === 'addItem') {
    after(() => {
      console.log(args[0])
    })
  }

  onError((error) => {
    console.error('Hello error:', error.message)
  })
})
</script>

<template>
  <div class="container">
    <TheHeader />

    <div class="mb-5 flex justify-end">
     <AppButton @click="cartStore.undo">Undo</AppButton>
     <AppButton class="ml-2" @click="cartStore.redo">Redo</AppButton>
   </div>
    
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItem($event, product)"
      />
    </ul>
  </div>
</template>
