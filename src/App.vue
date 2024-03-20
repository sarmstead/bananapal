<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import FruitIcon from './components/icons/IconFruit.vue'
import CartIcon from './components/icons/IconCart.vue'
type Product = {
  id: number
  name: string
  price: number
  unit: string
  image: string
}

const cart = ref()

const cartCount = ref(0)
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
            {{ cartCount }}
          </aside>
        </div>
      </nav>
    </div>
  </header>

  <RouterView
    @cart="
      (items: Product[]) => {
        cartCount = items.length
        cart = items
      }
    "
    :cart="cart"
  />
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
