<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FruitIcon from './components/icons/IconFruit.vue'
import CartIcon from './components/icons/IconCart.vue'
</script>

<template>
  <header class="container-fluid pb-3 mb-5 border-bottom border-blue">
    <div class="row justify-content-center justify-content-sm-between gap-3 gap-sm-0">
      <img alt="BananaPal logo" class="logo col-sm" src="@/assets/logo.svg" />
      <nav class="nav justify-content-center justify-content-sm-end col-sm gap-2 gap-sm-5">
        <RouterLink to="/" class="d-flex gap-2 text-decoration-none">
          <FruitIcon />
          <span>Products</span>
        </RouterLink>
        <RouterLink to="/about" class="d-flex gap-2 text-decoration-none">
          <CartIcon />
          <span>Cart</span>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav a:hover {
  background: none;
}
</style>
