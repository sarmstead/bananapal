<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import FruitIcon from './components/icons/IconFruit.vue'
import CartIcon from './components/icons/IconCart.vue'

const store = useCartStore()
const { cart } = storeToRefs(store)
</script>

<template>
  <header class="container-fluid pb-3 mb-5 border-bottom border-blue">
    <div class="row justify-content-center justify-content-sm-between gap-3 gap-sm-0">
      <RouterLink to="/" class="logo col-sm p-0">
        <img alt="BananaPal logo" src="@/assets/logo.svg" />
      </RouterLink>
      <nav class="nav justify-content-center justify-content-sm-end col-sm gap-2 gap-sm-5">
        <RouterLink to="/products" class="d-flex gap-2 text-decoration-none">
          <FruitIcon />
          <span>Products</span>
        </RouterLink>
        <div class="cart-link">
          <RouterLink to="/cart" class="d-flex gap-2 text-decoration-none">
            <CartIcon />
            <span>Cart</span>
          </RouterLink>
          <aside
            class="cart-count bg-yellow d-flex justify-content-center align-items-center rounded-circle fw-bold"
          >
            {{ cart.length }}
          </aside>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a:hover {
  background: none;
}

.cart-link {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -6px;
  left: 12px;
  height: 24px;
  width: 24px;
  font-size: 12px;
  pointer-events: none;
}
</style>
