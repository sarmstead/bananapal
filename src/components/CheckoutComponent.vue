<script setup lang="ts"></script>
<template>
  <h2 class="fw-bold pb-3 mb-5 border-bottom border-blue fs-2">Shipping Information</h2>
  <form action="">
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
    <div class="row flex-column flex-sm-row gap-4 mb-4">
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
  </form>
</template>

<style scoped></style>
