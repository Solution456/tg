import { ProductCategory, type ProductCategoryType } from '../types'

export type ProductCategoryListItem = {
  label: string
  value: ProductCategoryType
}

export const PRODUCT_CATEGORY_LIST: ProductCategoryListItem[] = [
  {
    label: 'Чебуреки',
    value: ProductCategory.CHEBUR
  },
  {
    label: 'Пироги',
    value: ProductCategory.PIROG
  },
  {
    label: 'Напитки',
    value: ProductCategory.DRINKS
  },
  {
    label: 'Комбо',
    value: ProductCategory.COMBO
  }
]
