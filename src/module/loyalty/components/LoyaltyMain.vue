<script setup lang="ts">
import type { Loyalty } from '../types'

import LoyaltyProgress from './LoyaltyProgress.vue'
import LoyaltyRemaining from './LoyaltyRemaining.vue'
import LoyaltyTarget from './LoyaltyTarget.vue'

import BaseCard from '@/shared/components/base/card/BaseCard.vue'

const props = defineProps<Loyalty>()
</script>

<template>
  <BaseCard class="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
    <LoyaltyRemaining v-bind="props" />
    <LoyaltyProgress v-bind="props" />
    <LoyaltyTarget
      :current="current"
      :target="target"
    />
  </BaseCard>
</template>
