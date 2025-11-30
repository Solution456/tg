<script setup lang="ts">
import { useCart } from '../../composables/use-cart'
import type { CartItem } from '../../types'

import BaseButton from '@/shared/components/base/BaseButton.vue'

defineProps<{
  cartItem: CartItem
}>()

const { addItemToCart, removeFromCart } = useCart()
</script>

<template>
  <div className="flex items-center gap-2">
    <BaseButton
      size="icon"
      variant="outline"
      class="h-8 w-8"
      @click="addItemToCart(cartItem)"
    >
      +
    </BaseButton>
    <span className="w-6 text-center">
      {{ cartItem.quantity }}
    </span>
    <BaseButton
      size="icon"
      variant="outline"
      class="h-8 w-8"
      @click="removeFromCart(cartItem)"
    >
      -
    </BaseButton>
  </div>
</template>
