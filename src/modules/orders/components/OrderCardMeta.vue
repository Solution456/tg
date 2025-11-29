<script setup lang="ts">
import { type Order, OrderStatus } from '../types'

defineProps<{
  order: Order
}>()
</script>

<template>
  <div class="flex items-center justify-between pt-3 border-t">
    <span class="font-semibold"> total </span>
    <span
      v-if="order.status === OrderStatus.IN_PROGRESS"
      class="text-sm text-muted-foreground"
    >
      Готов через ~15-20 минут
    </span>
  </div>
</template>
