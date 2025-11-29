<script setup lang="ts">
import type { Loyalty } from '../types'

import LoyaltyFaq from './LoyaltyFaq.vue'
import LoyaltyFreeAvailable from './LoyaltyFreeAvailable.vue'
import LoyaltyMain from './LoyaltyMain.vue'

const props = defineProps<Loyalty>()
</script>

<template>
  <LoyaltyFreeAvailable
    v-if="freeAvailable"
    :free-available="freeAvailable"
  />
  <LoyaltyMain v-bind="props" />
  <LoyaltyFaq />
</template>

<style scoped></style>
