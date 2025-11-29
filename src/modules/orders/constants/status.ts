import { OrderStatus } from '../types'

export const ORDER_STATUS = {
  [OrderStatus.CREATED]: 'создан',
  [OrderStatus.IN_PROGRESS]: 'в процессе',
  [OrderStatus.READY]: 'готов',
  [OrderStatus.DONE]: 'выполнен'
}
