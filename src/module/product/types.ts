export interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
  hasXL: boolean
  available: boolean
  category: ProductCategoryType
}

export const ProductCategory = {
  CHEBUR: 'CHEBUR',
  PIROG: 'PIROG',
  DRINKS: 'DRINKS',
  COMBO: 'COMBO'
} as const

export type ProductCategoryType =
  (typeof ProductCategory)[keyof typeof ProductCategory]
