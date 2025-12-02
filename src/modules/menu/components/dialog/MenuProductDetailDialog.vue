<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { DialogClose, DialogContent, DialogRoot } from 'reka-ui'

import { useCart } from '@/modules/cart/composables/use-cart'
import type { Product } from '@/modules/product/types'
import BaseButton from '@/shared/components/base/BaseButton.vue'

defineProps<{
  selectedMenuProduct: Product
}>()

const cart = useCart()
</script>

<template>
  <DialogRoot>
    <DialogContent class="sm:max-w-md p-0 gap-0 overflow-y-auto max-h-[90vh]">
      <DialogClose
        class="text-grass11 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
        aria-label="Close"
      >
        <Icon icon="lucide:x" />
      </DialogClose>
      <div class="relative">
        <img
          :src="selectedMenuProduct.image"
          :alt="selectedMenuProduct.name"
          class="w-full h-[280px] object-cover"
        />
      </div>

      <div class="p-6 space-y-4">
        <div>
          <h2 class="text-2xl font-semibold">
            {{ selectedMenuProduct.name }}
          </h2>
          <p class="text-muted-foreground mt-2">
            {{ selectedMenuProduct.description }}
          </p>
        </div>

        <div
          v-if="selectedMenuProduct.hasXL"
          class="flex gap-2"
        >
          <BaseButton class="flex-1"> Обычный </BaseButton>
          <BaseButton class="flex-1"> XL (+50%) </BaseButton>
        </div>

        <div class="flex items-center justify-between pt-">
          <div class="flex items-center gap-3">
            <BaseButton
              size="icon"
              variant="outline"
            >
              +
            </BaseButton>
            <span class="text-lg font-medium w-8 text-center">1</span>
            <BaseButton
              size="icon"
              variant="outline"
            >
              -
            </BaseButton>
          </div>
        </div>

        <BaseButton
          class="w-full"
          size="lg"
          @click="cart.addItemToCart(selectedMenuProduct)"
        >
          Добавить в корзину
        </BaseButton>
      </div>
    </DialogContent>
  </DialogRoot>
</template>

<style scoped></style>
