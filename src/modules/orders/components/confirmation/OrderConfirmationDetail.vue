<script setup lang="ts">
import type { Order } from '../../types'

import OrderConfirmationDetailOrderNumber from './detail/OrderConfirmationDetailOrderNumber.vue'
import OrderConfirmationDetailOrderReadyTime from './detail/OrderConfirmationDetailOrderReadyTime.vue'
import OrderConfirmationDetailOrderTotal from './detail/OrderConfirmationDetailOrderTotal.vue'

import { BaseCard } from '@/shared/components/base/card'

defineProps<{
  order: Order
}>()
</script>

<template>
  <BaseCard class="p-6 text-left space-y-4">
    <OrderConfirmationDetailOrderNumber>
      {{ order.id || '---' }}
    </OrderConfirmationDetailOrderNumber>

    <OrderConfirmationDetailOrderReadyTime />
    <OrderConfirmationDetailOrderTotal />
  </BaseCard>
</template>

<style scoped></style>
