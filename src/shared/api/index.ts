import { LoyaltyEntity } from './entity/loyalty'
import { OrderEntity } from './entity/orders'
import { ProductEntity } from './entity/product'

export function useApi() {
  return {
    product: ProductEntity(),
    loyalty: LoyaltyEntity(),
    orders: OrderEntity()
  }
}
