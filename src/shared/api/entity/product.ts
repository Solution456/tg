import { httpClient } from '../core/http-client'
import type { ApiResponse } from '../core/types'

import type { Product } from '@/modules/product/types'

export function ProductEntity() {
  return {
    getMenu: async () =>
      await httpClient.get<ApiResponse<Product[]>>({
        url: 'menu'
      })
  }
}
