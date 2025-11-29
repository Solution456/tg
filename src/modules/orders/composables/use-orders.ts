import { ref } from 'vue'

import type { Order } from '../types'

export function useOrders() {
  const orders = ref<Order[]>([])

  return {
    orders
  }
}
