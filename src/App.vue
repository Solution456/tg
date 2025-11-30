<script setup lang="ts">
import { useCart } from './modules/cart/composables/use-cart'

import { useBackButton } from '@/shared/composables/use-back-button'

useBackButton()

// GLOBAL-CONTEXT
useCart()
</script>

<template>
  <RouterView />
</template>
