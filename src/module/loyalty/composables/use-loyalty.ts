import { ref } from 'vue'

import type { Loyalty } from '../types'

export function useLoyalty() {
  const loyalty = ref<Loyalty>()

  return {
    loyalty
  }
}
