<script setup lang="ts">
import type { CartItem } from '../../types'

defineProps<{
  cartItem: CartItem
}>()
</script>

<template>
  <div class="flex-1 min-w-0">
    <h3 class="font-medium line-clamp-1">
      {{ cartItem.name }}
    </h3>
    <p class="text-sm text-primary">цена₽</p>
  </div>
</template>
