<script setup lang="ts">
import { onMounted } from 'vue'

import OrderEmpty from '@/modules/orders/components/OrderEmpty..vue'
import OrdersExistView from '@/modules/orders/components/OrdersExistView.vue'
import { useOrders } from '@/modules/orders/composables/use-orders'

const { orders, getMyOrders } = useOrders()

onMounted(getMyOrders)
</script>

<template>
  <OrderEmpty v-if="!orders.length" />
  <OrdersExistView
    v-else
    :orders="orders"
  />
</template>
