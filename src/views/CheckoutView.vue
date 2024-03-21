<script setup lang="ts">
import Cart from '@/components/CartComponent.vue'
import Checkout from '@/components/CheckoutComponent.vue'
</script>
<template>
  <main class="checkout">
    <Cart :checkout="true" class="mb-5" />
    <Checkout />
  </main>
</template>
