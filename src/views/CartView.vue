<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
const store = useCartStore()
const { cart } = storeToRefs(store)
</script>
<template>
  <div class="about">
    <h1>Cart</h1>
    <section>
      <article v-for="product in cart" :key="product.id">
        <img
          :src="`${product.image}`"
          :alt="`Image of ${product.name}`"
          class="object-fit-contain"
        />
        <h2 class="fw-bold fs-6 mb-1">{{ product.name }}</h2>
        <div>
          <label>Quanity</label>
          <select>
            <option value="1">1</option>
          </select>
          <p class="mb-3">{{ `$${product.price} / ${product.unit}` }}</p>
        </div>
        <button @click="store.removeFromCart(product)">Remove</button>
      </article>
    </section>
  </div>
</template>

<style></style>
