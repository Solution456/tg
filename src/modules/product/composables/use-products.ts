import { computed, ref } from 'vue'

import {
  type Product,
  ProductCategory,
  type ProductCategoryType
} from '../types'

export function useProducts() {
  const products = ref<Product[]>([])

  const selectedProductsCategory = ref<ProductCategoryType>(
    ProductCategory.CHEBUR
  )

  const selectedCategoryProducts = computed(() => {
    return products.value.filter(
      (p) => p.category === selectedProductsCategory.value
    )
  })

  return {
    products,
    selectedProductsCategory,
    selectedCategoryProducts
  }
}
