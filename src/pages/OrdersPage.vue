<script setup lang="ts">
import OrderEmpty from '@/modules/orders/components/OrderEmpty..vue'
import OrdersExistView from '@/modules/orders/components/OrdersExistView.vue'
import { useOrders } from '@/modules/orders/composables/use-orders'

const { orders } = useOrders()

// TODO: API
</script>

<template>
  <OrderEmpty v-if="!orders.length" />
  <OrdersExistView
    v-else
    :orders="orders"
  />
</template>
