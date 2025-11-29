<script setup lang="ts">
import type { Product } from '@/modules/product/types'
import { BaseCard } from '@/shared/components/base/card'

defineProps<{
  product: Product
}>()
</script>

<template>
  <BaseCard
    class="flex gap-3 p-4 cursor-pointer hover-elevate active-elevate-2"
  >
    <img
      :src="product.image"
      :atl="product.name"
      class="w-20 h-20 rounded-lg object-cover flex-shrink-0"
    />
    <div class="flex flex-col flex-1 min-w-0">
      <h3 class="font-semibold text-base leading-tight line-clamp-1">
        {{ product.name }}
      </h3>
      <p class="text-sm text-muted-foreground line-clamp-2 mt-1 leading-tight">
        {{ product.description }}
      </p>
      <p class="text-base font-medium text-primary mt-auto pt-2">
        {{ product.price }}
      </p>
    </div>
  </BaseCard>
</template>
