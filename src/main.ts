import './assets/main.scss'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('cart', JSON.stringify(state.cart.cart))
    localStorage.setItem('order', JSON.stringify(state.order.order))
  },
  { deep: true }
)
app.use(router)

app.mount('#app')
