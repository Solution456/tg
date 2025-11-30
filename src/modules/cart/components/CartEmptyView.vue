<script setup lang="ts">
import BaseButton from '@/shared/components/base/BaseButton.vue'
</script>

<template>
  <div
    class="min-h-screen pb-24 flex flex-col items-center justify-center px-4"
  >
    <h2 class="text-xl font-semibold mb-2">Корзина пуста</h2>
    <p class="text-muted-foreground text-center mb-6">
      Добавьте блюда из меню, чтобы оформить заказ
    </p>
    <BaseButton> Вернуться в меню </BaseButton>
  </div>
</template>
