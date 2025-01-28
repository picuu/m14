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
</script>

<template>
  <div class="container">
    <TheHeader />
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
