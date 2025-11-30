import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/MenuPage.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/pages/CheckoutPage.vue')
  },
  {
    path: '/loyalty',
    name: 'loyalty',
    component: () => import('@/pages/LoyaltyPage.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('@/pages/OrdersPage.vue')
  },
  {
    path: '/order-confirmation',
    name: 'order-confirmation',
    component: () => import('@/pages/OrderConfirmationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
