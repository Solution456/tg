import { httpClient } from '../core/http-client'
import type { ApiResponse } from '../core/types'

import type { Order } from '@/modules/orders/types'

export function OrderEntity() {
  return {
    getMyOrders: async () =>
      await httpClient.get<ApiResponse<Order[]>>({
        url: 'orders/my-orders'
      })
  }
}
