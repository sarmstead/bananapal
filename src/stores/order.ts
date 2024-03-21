import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ComputedRef } from 'vue'
import calculateInitialState from '@/utils/calculateInitialState'
import { useCartStore } from '@/stores/cart'

type Order = {
  name: string
  address: string
  city: string
  state: string
  zip: string
  cardholder: string
  cardnum: string
  expiration: string
  cvv: string
  total: ComputedRef<number>
}

export const useOrderStore = defineStore('order', () => {
  const initialTotal = computed(() => 0)
  const defaultOrder = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardholder: '',
    cardnum: '',
    expiration: '',
    cvv: '',
    total: initialTotal
  }
  const order: Ref<Order> = ref(calculateInitialState('order', defaultOrder))

  const saveOrder = (item: Order) => {
    const cardnumLength = item.cardnum.length
    item['cardnum'] = item.cardnum.slice(cardnumLength - 5)
    order.value = item
  }

  const $reset = () => {
    order.value = defaultOrder
    localStorage.setItem(
      'order',
      JSON.stringify({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardholder: '',
        cardnum: '',
        expiration: '',
        cvv: '',
        total: 0
      })
    )

    const cartStore = useCartStore()
    cartStore.$reset()
  }

  return { order, saveOrder, $reset }
})
