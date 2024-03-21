<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/cart'

const store = useCartStore()
const { subTotal } = storeToRefs(store)
</script>
<template>
  <form action="">
    <section>
      <h2 class="fw-bold pb-3 mb-3 border-bottom border-blue fs-2">Shipping Information</h2>
      <div class="row mb-4">
        <label for="name">
          <span class="form-label">Full Name</span>
          <input type="text" id="name" class="form-control" placeholder="Full Name" />
        </label>
      </div>
      <div class="row mb-4">
        <label for="address">
          <span class="form-label">Address</span>
          <input type="text" id="address" class="form-control" placeholder="Address" />
        </label>
      </div>
      <div class="row flex-column flex-sm-row gap-4 mb-5">
        <div class="col pe-sm-0">
          <label for="city" class="w-100">
            <span class="form-label">City</span>
            <input type="text" id="city" class="form-control" placeholder="City" />
          </label>
        </div>
        <div class="col p-sm-0">
          <label for="state" class="w-100">
            <span class="form-label">State</span>
            <input type="text" id="state" class="form-control" placeholder="State" />
          </label>
        </div>
        <div class="col ps-sm-0">
          <label for="zip" class="w-100">
            <span class="form-label">Zip</span>
            <input type="text" id="zip" class="form-control" placeholder="Zip" />
          </label>
        </div>
      </div>
    </section>

    <section>
      <h2 class="fw-bold pb-3 mb-3 border-bottom border-blue fs-2">Payment Method</h2>
      <div class="row mb-4">
        <label for="cardholder">
          <span class="form-label">Name on Card</span>
          <input type="text" id="cardholder" class="form-control" placeholder="Name on Card" />
        </label>
      </div>
      <div class="row mb-4">
        <label for="cardnum">
          <span class="form-label">Card Number</span>
          <input type="text" id="cardnum" class="form-control" placeholder="Name on Card" />
        </label>
      </div>
      <div class="row flex-column flex-sm-row gap-4 mb-4">
        <div class="col pe-sm-0">
          <label for="expiration" class="w-100">
            <span class="form-label">Expiration</span>
            <input type="text" id="expiration" class="form-control" placeholder="Expiration" />
          </label>
        </div>
        <div class="col ps-sm-0">
          <label for="cvv" class="w-100">
            <span class="form-label">CVV</span>
            <input type="text" id="cvv" class="form-control" placeholder="CVV" />
          </label>
        </div>
      </div>
    </section>
    <div class="d-flex justfiy-content-center justify-content-sm-end">
      <button class="btn btn-yellow w-100 mw-sm-fit" type="submit">Pay ${{ subTotal }}</button>
    </div>
  </form>
</template>

<style scoped></style>
