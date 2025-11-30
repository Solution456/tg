import { useLocalStorage } from '@vueuse/core'

import type { CartItem } from '../types'

import type { Product } from '@/modules/product/types'
import { createContext } from '@/shared/utils/context'

const [injectCartContext, provideCartContext] =
  createContext<ReturnType<typeof createCartContext>>('Cart')

export function useCart() {
  let ctx = injectCartContext()

  if (!ctx) {
    ctx = createCartContext()
    provideCartContext(ctx)
  }

  return ctx
}

function createCartContext() {
  const cart = useLocalStorage<CartItem[]>('cart', () => [])

  function addItemToCart(product: Product) {
    const isExisting = cart.value.findIndex((item) => item.id === product.id)
    if (isExisting) {
      cart.value[isExisting].quantity++
    } else {
      cart.value.push({
        ...product,
        quantity: 1
      })
    }
  }

  function removeFromCart(product: Product) {
    const isExisting = cart.value.findIndex((item) => item.id === product.id)
    if (!isExisting) return

    const quantity = cart.value[isExisting].quantity
    if (quantity === 1) {
      cart.value.splice(isExisting, 1)

      return
    }

    cart.value[isExisting].quantity--
  }

  function clearCart() {
    cart.value = []
  }

  return {
    cart,
    addItemToCart,
    removeFromCart,
    clearCart
  }
}
