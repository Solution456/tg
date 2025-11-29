<script setup lang="ts">
import { BaseCard } from '@/shared/components/base/card'

defineProps<{
  freeAvailable: number
}>()
</script>

<template>
  <BaseCard class="p-4 bg-primary/10 border-primary">
    <div class="flex items-center gap-3">
      <span class="text-3xl">🎉</span>
      <div class="flex-1">
        <p class="font-semibold text-primary">
          У вас {{ freeAvailable }} бесплатных чебурека!
        </p>
        <p class="text-sm text-muted-foreground">
          Покажите этот экран при заказе
        </p>
      </div>
    </div>
  </BaseCard>
</template>

<style scoped></style>
