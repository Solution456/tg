<script setup lang="ts">
import { useCart } from '../composables/use-cart'

import CartItem from './CartItem.vue'
import CartTotalInfo from './CartTotalInfo.vue'

import BaseButton from '@/shared/components/base/BaseButton.vue'
import { BaseCard } from '@/shared/components/base/card'
import AppPageLayout from '@/shared/layouts/AppPageLayout.vue'

const { cart } = useCart()
</script>

<template>
  <AppPageLayout
    title="Корзина"
    description="Добавьте блюда из меню, чтобы оформить заказ"
  >
    <BaseCard class="p-4 space-y-4">
      <h2 className="font-semibold">Ваш заказ</h2>

      <CartItem
        v-for="cartItem of cart"
        :key="cartItem.id"
        :cart-item="cartItem"
      />
      <CartTotalInfo />
      <BaseButton
        class="w-full"
        size="lg"
      >
        Оформить заказ
      </BaseButton>
    </BaseCard>
  </AppPageLayout>
</template>

<style scoped></style>
