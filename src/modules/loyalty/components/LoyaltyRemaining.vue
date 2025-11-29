<script setup lang="ts">
import { computed } from 'vue'

import type { Loyalty } from '../types'

const props = defineProps<Loyalty>()

const remaining = computed(() => props.target - props.current)
const remainingText = computed(() =>
  remaining.value > 1
    ? `Еще ${remaining} чебурека до следующего  бесплатного!`
    : 'Вы заработали бесплатный чебурек! 🎉'
)
</script>

<template>
  <div class="flex items-start gap-4">
    <div class="w-16 h-16 flex items-center justify-center text-4xl">🥟</div>
    <div class="flex-1">
      <h3 class="text-lg font-semibold mb-1">Бонусная программа</h3>
      <p class="text-sm text-muted-foreground">
        {{ remainingText }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
