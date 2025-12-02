import { ref } from 'vue'

import type { Order } from '../types'

import { useApi } from '@/shared/api'

export function useOrders() {
  const orders = ref<Order[]>([])

  const api = useApi()

  async function getMyOrders() {
    const res = await api.orders.getMyOrders()

    if (res.error) {
      console.error('ERROR:', res.error)
    } else {
      orders.value = res.data as Order[]
    }
  }

  return {
    orders,
    getMyOrders
  }
}
