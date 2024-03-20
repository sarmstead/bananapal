<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FruitIcon from './components/icons/IconFruit.vue'
import CartIcon from './components/icons/IconCart.vue'
</script>

<template>
  <header>
    <img alt="BananaPal logo" class="logo" src="@/assets/logo.svg" />
    <nav>
      <RouterLink to="/">
        <FruitIcon />
        <span>Products</span>
      </RouterLink>
      <RouterLink to="/about">
        <CartIcon />
        <span>Cart</span>
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 0 20px;
  border-bottom: 1px solid var(--bp-c-blue);
}

nav {
  display: flex;
  align-items: center;
  gap: 48px;
}

nav a {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  background: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 768px) {
  header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    font-size: 18px;
  }
}

@media (min-width: 1024px) {
}
</style>
