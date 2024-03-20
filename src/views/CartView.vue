<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import CloseIcon from '@/components/icons/IconClose.vue'

const store = useCartStore()
const { cart } = storeToRefs(store)
</script>
<template>
  <main class="cart">
    <h1 class="fw-bold pb-3 mb-5 border-bottom border-blue">Cart</h1>
    <section class="d-flex flex-column gap-5 gap-sm-2">
      <article v-for="product in cart" :key="product.id" class="d-flex flex-column flex-sm-row">
        <section
          class="col col-sm-9 order-1 order-sm-0 d-flex flex-column flex-sm-row align-items-center justify-content-sm-start gap-3"
        >
          <div class="cart__item__img d-flex justify-content-center overflow-hidden">
            <img
              :src="`${product.image}`"
              :alt="`Image of ${product.name}`"
              class="object-fit-cover w-100"
            />
          </div>
          <div>
            <h2 class="fw-bold fs-6 mb-2">{{ product.name }}</h2>
            <div class="d-flex gap-2 align-items-center">
              <label>Quanity</label>
              <select class="form-select form-select-sm">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <p class="mb-0">
                <span class="fw-bold">{{ `$${product.price}` }}</span
                >{{ ` / ${product.unit}` }}
              </p>
            </div>
          </div>
        </section>

        <section
          class="col col-sm-3 d-flex justify-content-end align-items-center order-0 order-sm-1"
        >
          <button
            @click="store.removeFromCart(product)"
            class="btn max-h-auto text-uppercase d-flex align-items-center gap-2 text-navy"
            :title="`Remove ${product.name}`"
          >
            <span>Remove</span>
            <CloseIcon />
          </button>
        </section>
      </article>
    </section>
  </main>
</template>

<style scoped>
.cart {
  button {
    height: fit-content;
    min-height: 48px;
    font-size: 14px;
    letter-spacing: 0.7px;
  }

  .cart__item__img {
    width: 100px;
    height: 100px;
  }
}
</style>
