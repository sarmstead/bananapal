<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const orderStore = useOrderStore()
const { order } = storeToRefs(orderStore)

const router = useRouter()

const handleReset = () => {
  orderStore.$reset()
  router.push({ path: '/' })
}
</script>
<template>
  <section v-if="order.total > 0">
    <h1 class="fw-bold mb-3 fs-2">Success!</h1>
    <p class="mb-5">
      Thank you for submitting your order. One of our pals is gathering your items right now.
    </p>
    <h2 class="fs-4 mb-3">Order Details</h2>
    <section class="mb-3">
      <h3 class="fs-6 fw-bold mb-0 text-uppercase">Ship to</h3>
      <p class="mb-0 fw-bold">{{ order.name }}</p>
      <p class="mb-0">{{ order.address }}</p>
      <p class="mb-0">{{ order.city }}, {{ order.state }} {{ order.zip }}</p>
    </section>
    <section class="mb-3">
      <h3 class="fs-6 fw-bold mb-0 text-uppercase">Billing</h3>
      <p class="mb-0 fw-bold">{{ order.cardholder }}</p>
      <p class="mb-0">Card: ****{{ order.cardnum }}</p>
      <p class="mb-0">Exp: {{ order.expiration }}</p>
    </section>
    <section class="mb-3">
      <h3 class="fs-6 fw-bold mb-0 text-uppercase">Order Total</h3>
      <p class="mb-0">${{ order.total }}</p>
    </section>
    <button @click="handleReset" class="btn btn-yellow">Clear Order History</button>
  </section>
  <section v-else>
    <h1 class="fw-bold mb-3 fs-2">Umm...</h1>
    <p>
      Do you work for the CIA? Not sure how you got here, homie 🤷🏽. Try ordering something first.
      Sheesh!
    </p>
    <RouterLink to="/products" class="btn btn-yellow">View Products</RouterLink>
  </section>
</template>

<style scoped></style>
