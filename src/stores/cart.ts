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

  const addToCart = (product: Product) => {
    cart.value.push(product)
  }

  const removeFromCart = (product: Product) => {
    cart.value = cart.value.filter((item) => item !== product)
  }

  const countItems = (product: Product) => {
    return cart.value.filter((item) => item === product).length
  }

  return { cart, addToCart, removeFromCart, countItems }
})
