<script setup lang="ts">
import MenuProductItemCard from '@/module/menu/components/card/MenuProductItemCard.vue'
import MenuProductCategorySlider from '@/module/menu/components/MenuProductCategorySlider.vue'
import { useProducts } from '@/module/product/composables/use-products'
import type { ProductCategoryType } from '@/module/product/types'
import AppPageLayout from '@/shared/layouts/AppPageLayout.vue'

const { selectedCategoryProducts, selectedProductsCategory } = useProducts()

function selectProductCategory(value: ProductCategoryType) {
  selectedProductsCategory.value = value
}

// TODO: запросы / корзина
</script>

<template>
  <AppPageLayout
    title="Меню"
    description="Вкусная традиционная кухня"
  >
    <div class="max-w-lg mx-auto">
      <MenuProductCategorySlider
        :selected-category="selectedProductsCategory"
        @select-category="selectProductCategory"
      />

      <div class="px-4 space-y-3 mt-4">
        <MenuProductItemCard
          v-for="product of selectedCategoryProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </AppPageLayout>
</template>
