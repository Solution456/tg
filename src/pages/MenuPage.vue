<script setup lang="ts">
import { onMounted, ref } from 'vue'

import MenuProductItemCard from '@/modules/menu/components/card/MenuProductItemCard.vue'
import MenuProductDetailDialog from '@/modules/menu/components/dialog/MenuProductDetailDialog.vue'
import MenuProductCategorySlider from '@/modules/menu/components/MenuProductCategorySlider.vue'
import { useProducts } from '@/modules/product/composables/use-products'
import type { Product, ProductCategoryType } from '@/modules/product/types'
import AppPageLayout from '@/shared/layouts/AppPageLayout.vue'

const { selectedCategoryProducts, selectedProductsCategory, getProducts } =
  useProducts()

function selectProductCategory(value: ProductCategoryType) {
  selectedProductsCategory.value = value
}

const selectedMenuProduct = ref<Product | null>(null)

function selectMenuProduct(product: Product) {
  selectedMenuProduct.value = product
}

onMounted(() => getProducts())
</script>

<template>
  <MenuProductDetailDialog
    v-if="selectedMenuProduct"
    :selected-menu-product="selectedMenuProduct"
  />
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
          @click="selectMenuProduct(product)"
        />
      </div>
    </div>
  </AppPageLayout>
</template>
