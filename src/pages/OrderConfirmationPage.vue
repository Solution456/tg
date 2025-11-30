<script setup lang="ts">
import OrderConfirmationActions from '@/modules/orders/components/confirmation/OrderConfirmationActions.vue'
import OrderConfirmationDetail from '@/modules/orders/components/confirmation/OrderConfirmationDetail.vue'
import OrderConfirmationHead from '@/modules/orders/components/confirmation/OrderConfirmationHead.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center px-4 pb-24"
  >
    <div class="max-w-md w-full space-y-6 text-center">
      <OrderConfirmationHead />
      <OrderConfirmationDetail />
      <OrderConfirmationActions />
    </div>
  </div>
</template>

<style scoped></style>
