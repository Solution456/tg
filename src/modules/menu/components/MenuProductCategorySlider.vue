<script setup lang="ts">
import {
  PRODUCT_CATEGORY_LIST,
  type ProductCategoryListItem
} from '@/modules/product/constants/product-category-list'
import type { ProductCategoryType } from '@/modules/product/types'
import BaseBadge from '@/shared/components/base/BaseBadge.vue'

const emit = defineEmits<{
  selectCategory: [value: ProductCategoryType]
}>()

const props = defineProps<{
  selectedCategory: ProductCategoryType
}>()

function isActiveCategory(category: ProductCategoryListItem) {
  return category.value === props.selectedCategory
}
</script>

<template>
  <div className="sticky top-[73px] z-20 bg-background py-4">
    <div class="flex gap-2 overflow-x-auto pb-2 px-4 scrollbar-hide">
      <BaseBadge
        v-for="category in PRODUCT_CATEGORY_LIST"
        :key="category.value"
        class="flex items-center gap-2 px-4 py-2 cursor-pointer whitespace-nowrap hover-elevate active-elevate-2"
        :variant="isActiveCategory(category) ? 'default' : 'secondary'"
        @click="emit('selectCategory', category.value)"
      >
        {{ category.label }}
      </BaseBadge>
    </div>
  </div>
</template>

<style scoped></style>
