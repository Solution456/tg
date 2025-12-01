import { ref } from 'vue'

import type { Loyalty } from '../types'

import { useApi } from '@/shared/api'

export function useLoyalty() {
  const loyalty = ref<Loyalty>()
  const isLoading = ref(false)
  const api = useApi()

  async function getLoyalty(userId: string) {
    isLoading.value = true

    const res = await api.loyalty.getLoyalty(userId)

    if (res.error) {
      console.error('ERROR:', res.error)
    } else {
      loyalty.value = res.data as Loyalty
    }
    isLoading.value = false
  }
  return {
    loyalty,
    getLoyalty
  }
}
