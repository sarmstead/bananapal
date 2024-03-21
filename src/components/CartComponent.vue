<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import CloseIcon from '@/components/icons/IconClose.vue'

const store = useCartStore()
const { cart } = storeToRefs(store)
const { countItems } = store
</script>
<template>
  <section class="cart">
    <h1 class="fw-bold pb-3 mb-5 border-bottom border-blue">Cart</h1>
    <p class="bg-blue-mute p-2 mt-n3" v-if="cart?.length < 1">No items</p>
    <section class="d-flex flex-column gap-5 gap-sm-2" v-else>
      <article
        v-for="product in [...new Set(cart)]"
        :key="product.id"
        class="d-flex flex-column flex-sm-row"
      >
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
            <div class="d-flex align-items-center">
              <span>{{ countItems(product) }} @&nbsp;</span>
              <p class="mb-0">
                <span class="fw-bold">{{ `$${product.price}` }}</span
                >{{ `&nbsp;/ ${product.unit}` }}
              </p>
            </div>
          </div>
        </section>

        <section
          class="col col-sm-3 d-flex justify-content-end align-items-center order-0 order-sm-1"
        >
          <button
            @click="store.removeFromCart(product)"
            class="btn max-h-auto text-uppercase d-flex align-items-center gap-2 text-navy rounded-0"
            :title="`Remove ${product.name}`"
          >
            <span>Remove</span>
            <CloseIcon />
          </button>
        </section>
      </article>
      <div class="checkout d-flex justify-content-center justify-content-sm-end">
        <RouterLink to="/checkout" class="btn btn-yellow w-100 mw-sm-fit">Checkout</RouterLink>
      </div>
    </section>
  </section>
</template>

<style scoped>
.cart article button {
  height: fit-content;
  min-height: 48px;
  font-size: 14px;
  letter-spacing: 0.7px;
}

.cart article .cart__item__img {
  width: 100px;
  height: 100px;
}
</style>
