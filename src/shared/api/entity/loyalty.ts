import { httpClient } from '../core/http-client'
import type { ApiResponse } from '../core/types'

import type { Loyalty } from '@/modules/loyalty/types'

export function LoyaltyEntity() {
  return {
    getLoyalty: async (userId: string) =>
      await httpClient.get<ApiResponse<Loyalty>>({
        url: `loyalty/${userId}`
      })
  }
}
