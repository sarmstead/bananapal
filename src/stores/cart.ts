import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'

type Product = {
  id: number
  name: string
  price: number
  unit: string
  image: string
}

export const useCartStore = defineStore('cart', () => {
  const cart: Ref<Product[]> = ref([])
  function addToCart(product: Product) {
    cart.value.push(product)
  }

  return { cart, addToCart }
})
