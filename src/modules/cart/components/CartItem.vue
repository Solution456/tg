<script setup lang="ts">
import type { CartItem } from '../types'

import CartItemActions from './item/CartItemActions.vue'
import CartItemImage from './item/CartItemImage.vue'
import CartItemInfo from './item/CartItemInfo.vue'

defineProps<{
  cartItem: CartItem
}>()
</script>

<template>
  <div class="flex gap-3">
    <CartItemImage
      :image="cartItem.image"
      :alt="cartItem.name"
    />
    <CartItemInfo :cart-item="cartItem" />
    <CartItemActions :cart-item="cartItem" />
  </div>
</template>

<style scoped></style>
