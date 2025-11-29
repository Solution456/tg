<script setup lang="ts">
import type { Order } from '../types'

import OrderCard from './OrderCard.vue'

import AppPageLayout from '@/shared/layouts/AppPageLayout.vue'

defineProps<{
  orders: Order[]
}>()
</script>

<template>
  <AppPageLayout
    title="Мои заказы"
    description="Отслеживайте историю заказов"
  >
    <div class="max-w-lg mx-auto px-4 py-6 space-y-4">
      <OrderCard
        v-for="order of orders"
        :key="order.id"
        :order="order"
      />
    </div>
  </AppPageLayout>
</template>

<style scoped></style>
