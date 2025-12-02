<script setup lang="ts">
import { useCart } from './modules/cart/composables/use-cart'
import AppNavBottom from './shared/layouts/AppNavBottom.vue'

import { useBackButton } from '@/shared/composables/use-back-button'

useBackButton()

// GLOBAL-CONTEXT
useCart()
</script>

<template>
  <RouterView />
  <AppNavBottom />
</template>
