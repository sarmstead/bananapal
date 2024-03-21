<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Cart from '@/components/CartComponent.vue'
import Checkout from '@/components/CheckoutComponent.vue'
import { useCartStore } from '@/stores/cart'
import { RouterLink } from 'vue-router'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
</script>
<template>
  <main class="checkout">
    <section v-if="cart.length > 0">
      <Cart :checkout="true" class="mb-5" />
      <Checkout />
    </section>
    <section v-else>
      <h1 class="fw-bold mb-3 fs-2">Well, well, well...</h1>
      <p>You don't have any items in your cart, silly!</p>
      <RouterLink to="/products" class="btn btn-yellow">Go Shopping</RouterLink>
    </section>
  </main>
</template>
