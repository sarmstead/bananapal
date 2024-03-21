import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import calculateInitialState from '@/utils/calculateInitialState'

type Product = {
  id: number
  name: string
  price: number
  unit: string
  image: string
}

export const useCartStore = defineStore('cart', () => {
  const cart: Ref<Product[]> = ref(calculateInitialState('cart', []))

  const subTotal = computed(() =>
    cart.value.reduce((acc, currentValue) => acc + currentValue.price, 0)
  )

  const addToCart = (product: Product) => {
    cart.value.push(product)
  }

  const removeFromCart = (product: Product) => {
    const filteredItems = cart.value.filter((item) => item !== product)
    cart.value = filteredItems
    localStorage.setItem('cart', JSON.stringify(filteredItems))
  }

  const countItems = (product: Product) => {
    return cart.value.filter((item) => item === product).length
  }

  const $reset = () => {
    cart.value = []
    localStorage.removeItem('cart')
  }

  return { cart, subTotal, addToCart, removeFromCart, countItems, $reset }
})
