<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'
import { useOrderStore } from '@/stores/order'

const router = useRouter()

const orderStore = useOrderStore()
const { saveOrder } = orderStore

const cartStore = useCartStore()
const { subTotal } = storeToRefs(cartStore)

const form = ref({
  name: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  cardholder: '',
  cardnum: '',
  expiration: '',
  cvv: ''
})

const handleSubmit = async () => {
  const order = { total: subTotal, ...form.value }
  saveOrder(order)
  router.push({ path: '/checkout/success' })
}
</script>
<template>
  <form @submit.prevent="">
    <section>
      <h2 class="fw-bold pb-3 mb-3 border-bottom border-blue fs-2">Shipping Information</h2>
      <div class="row mb-4">
        <label for="name">
          <span class="form-label">Full Name</span>
          <input
            type="text"
            id="name"
            class="form-control"
            placeholder="Full Name"
            v-model="form.name"
          />
        </label>
      </div>
      <div class="row mb-4">
        <label for="address">
          <span class="form-label">Address</span>
          <input
            type="text"
            id="address"
            class="form-control"
            placeholder="Address"
            v-model="form.address"
          />
        </label>
      </div>
      <div class="row flex-column flex-sm-row gap-4 mb-5">
        <div class="col pe-sm-0">
          <label for="city" class="w-100">
            <span class="form-label">City</span>
            <input
              type="text"
              id="city"
              class="form-control"
              placeholder="City"
              v-model="form.city"
            />
          </label>
        </div>
        <div class="col p-sm-0">
          <label for="state" class="w-100">
            <span class="form-label">State</span>
            <input
              type="text"
              id="state"
              class="form-control"
              placeholder="State"
              v-model="form.state"
            />
          </label>
        </div>
        <div class="col ps-sm-0">
          <label for="zip" class="w-100">
            <span class="form-label">Zip</span>
            <input type="text" id="zip" class="form-control" placeholder="Zip" v-model="form.zip" />
          </label>
        </div>
      </div>
    </section>

    <section>
      <h2 class="fw-bold pb-3 mb-3 border-bottom border-blue fs-2">Payment Method</h2>
      <div class="row mb-4">
        <label for="cardholder">
          <span class="form-label">Name on Card</span>
          <input
            type="text"
            id="cardholder"
            class="form-control"
            placeholder="Name on Card"
            v-model="form.cardholder"
          />
        </label>
      </div>
      <div class="row mb-4">
        <label for="cardnum">
          <span class="form-label">Card Number</span>
          <input
            type="text"
            id="cardnum"
            class="form-control"
            placeholder="Name on Card"
            v-model="form.cardnum"
          />
        </label>
      </div>
      <div class="row flex-column flex-sm-row gap-4 mb-4">
        <div class="col pe-sm-0">
          <label for="expiration" class="w-100">
            <span class="form-label">Expiration</span>
            <input
              type="text"
              id="expiration"
              class="form-control"
              placeholder="Expiration"
              v-model="form.expiration"
            />
          </label>
        </div>
        <div class="col ps-sm-0">
          <label for="cvv" class="w-100">
            <span class="form-label">CVV</span>
            <input type="text" id="cvv" class="form-control" placeholder="CVV" v-model="form.cvv" />
          </label>
        </div>
      </div>
    </section>
    <div class="d-flex justfiy-content-center justify-content-sm-end">
      <button class="btn btn-yellow w-100 mw-sm-fit" @click="handleSubmit">
        Pay ${{ subTotal }}
      </button>
    </div>
  </form>
</template>

<style scoped></style>
