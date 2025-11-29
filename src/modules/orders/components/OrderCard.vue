<script setup lang="ts">
import { computed } from 'vue'

import { ORDER_STATUS } from '../constants/status'
import { type Order, OrderStatus } from '../types'

import OrderCardMeta from './OrderCardMeta.vue'

import BaseBadge from '@/shared/components/base/BaseBadge.vue'
import { BaseCard } from '@/shared/components/base/card'
import { getFormattedDate } from '@/shared/utils/date'

const props = defineProps<{
  order: Order
}>()

const statusVariant = computed(() => {
  switch (props.order.status) {
    case OrderStatus.CREATED:
    case OrderStatus.IN_PROGRESS:
    case OrderStatus.READY:
      return 'default'
    case OrderStatus.DONE:
      return 'secondary'
    default:
      return 'secondary'
  }
})

const statusLabel = computed(() => ORDER_STATUS[props.order.status])
</script>

<template>
  <BaseCard class="p-4 hover-elevate">
    <div class="flex items-start justify-between mb-3">
      <div>
        <h3
          class="font-semibold text-xs font-mono"
          data-testid="text-order-id"
        >
          #{{ order.id }}
        </h3>
        <p
          class="text-sm text-muted-foreground"
          data-testid="text-order-date"
        >
          {{ getFormattedDate(order.createdAt) }}
        </p>
      </div>
      <BaseBadge
        class="flex items-center gap-1"
        :variant="statusVariant"
      >
        {{ statusLabel }}
      </BaseBadge>
    </div>

    <OrderCardMeta :order="order" />
  </BaseCard>
</template>
