<script setup lang="ts">
import { BaseCard } from '@/shared/components/base/card'
import Separator from '@/shared/components/Separator.vue'
</script>

<template>
  <BaseCard class="p-4 space-y-3">
    <h2 class="font-semibold">Итого</h2>
    <div class="space-y-2 text-sm">
      <div class="flex justify-between">
        <span class="text-muted-foreground">Сумма</span>
        <span>Сумма ₽</span>
      </div>
      <Separator />
      <div class="flex justify-between text-base font-semibold">
        <span>Всего</span>
        <span>Тотал ₽</span>
      </div>
    </div>
  </BaseCard>
</template>
