<script setup lang="ts">
const props = defineProps(['cart'])
console.log(props.cart)
</script>
<template>
  <div class="about">
    <h1>Cart</h1>
    <section>
      <article v-for="product in props.cart" :key="product.id">
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
      </article>
    </section>
  </div>
</template>

<style></style>
