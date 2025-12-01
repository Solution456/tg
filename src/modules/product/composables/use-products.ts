import { computed, ref } from 'vue'

import {
  type Product,
  ProductCategory,
  type ProductCategoryType
} from '../types'

import { useApi } from '@/shared/api'

export function useProducts() {
  const products = ref<Product[]>([])

  const isLoading = ref(false)

  const api = useApi()
  const selectedProductsCategory = ref<ProductCategoryType>(
    ProductCategory.CHEBUR
  )

  const selectedCategoryProducts = computed(() => {
    return products.value.filter(
      (p) => p.category === selectedProductsCategory.value
    )
  })

  async function getProducts() {
    isLoading.value = true
    const res = await api.product.getMenu()

    if (res.error && !res.data) {
      console.log('ERROR:', res.error.message)
    } else {
      products.value = res.data as Product[]
    }

    isLoading.value = false
  }

  return {
    products,
    getProducts,
    selectedProductsCategory,
    selectedCategoryProducts
  }
}
