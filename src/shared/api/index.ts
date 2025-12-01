import { LoyaltyEntity } from './entity/loyalty'
import { ProductEntity } from './entity/product'

export function useApi() {
  return {
    product: ProductEntity(),
    loyalty: LoyaltyEntity()
  }
}
