<script setup lang="ts">
import CartEmptyView from '@/modules/cart/components/CartEmptyView.vue'
import CartView from '@/modules/cart/components/CartView.vue'
import { useCart } from '@/modules/cart/composables/use-cart'

const { cart } = useCart()

// TODO: API
</script>

<template>
  <CartEmptyView v-if="!cart.length" />
  <CartView v-else />
</template>
