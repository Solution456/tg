<script setup lang="ts">
import { computed } from 'vue'

import type { Loyalty } from '../types'

import BaseProgress from '@/shared/components/BaseProgress.vue'

const props = defineProps<{
  current: Loyalty['current']
  target: Loyalty['target']
}>()

const loyaltyProgress = computed(() =>
  Math.round((props.current / props.target) * 100)
)

const loyaltyProgressText = computed(() => `${props.current} / ${props.target}`)
</script>

<template>
  <div class="mt-6 space-y-2">
    <div class="flex justify-between text-sm">
      <span class="text-muted-foreground">Прогресс</span>
      <span class="font-medium">
        {{ loyaltyProgressText }}
      </span>
    </div>
    <BaseProgress
      :value="loyaltyProgress"
      class-name="h-2"
    />
  </div>
</template>

<style scoped></style>
