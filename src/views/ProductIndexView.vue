<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import products from '../../api/products.json'

type Product = {
  id: number
  name: string
  price: number
  unit: string
  image: string
}

const emit = defineEmits(['cart'])
const cart: Ref<Product[]> = ref([])

const handleAddToBasket = (product: Product) => {
  cart.value.push(product)
  emit('cart', cart.value)
}
</script>

<template>
  <main>
    <section class="container-fluid products">
      <div class="row justify-content-center gap-3">
        <article
          v-for="product in products"
          :key="product.id"
          class="col-sm-6 col-md-3 border border-blue p-2"
        >
          <div class="mw-100 d-flex justify-content-center overflow-hidden">
            <img
              :src="`${product.image}`"
              :alt="`Image of ${product.name}`"
              class="object-fit-contain"
              height="150px"
            />
          </div>

          <h2 class="fw-bold fs-6 mb-1">{{ product.name }}</h2>
          <p class="mb-3">{{ `$${product.price} / ${product.unit}` }}</p>

          <button class="btn btn-yellow" @click="handleAddToBasket(product)">Add to Basket</button>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.products {
  max-width: 952px;
}

@media (min-width: 576px) {
  .products article {
    max-width: 225px;
  }
}
</style>
