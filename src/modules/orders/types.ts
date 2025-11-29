export const OrderStatus = {
  CREATED: 'CREATED',
  IN_PROGRESS: 'IN_PROGRESS',
  READY: 'READY',
  DONE: 'DONE'
} as const

export type OrderStatusType = (typeof OrderStatus)[keyof typeof OrderStatus]

export interface Order {
  id: number
  userId: string
  status: OrderStatusType
  notes: string
  orderItems: OrderItem[]
  createdAt: string
}

export interface OrderItem {}
