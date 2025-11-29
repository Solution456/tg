<script setup lang="ts">
import type { Loyalty } from '../types'

import LoyaltyIndicator from './LoyaltyIndicator.vue'

defineProps<{
  target: Loyalty['target']
  current: Loyalty['current']
}>()
</script>

<template>
  <div class="mt-4 flex gap-2 flex-wrap">
    <LoyaltyIndicator
      v-for="index of target"
      :key="`loyalty-indicator-${index}`"
      :is-active="index <= current"
    >
      {{ index }}
    </LoyaltyIndicator>
  </div>
</template>

<style scoped></style>
