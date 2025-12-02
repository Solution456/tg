<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
const routes = [
  {
    id: 1,
    name: 'home',
    path: '/',
    label: 'Меню',
    iconName: 'mdi:home'
  },
  {
    id: 2,
    name: 'loyalty',
    path: '/loyalty',
    label: 'Бонусы',
    iconName: 'mdi:gift'
  },
  {
    id: 3,
    name: 'my-orders',
    path: '/my-orders',
    label: 'Мои заказы',
    iconName: 'mdi:shopping'
  },
  {
    id: 4,
    name: 'Профиль',
    path: '/',
    label: 'Профиль',
    iconName: 'mdi:user'
  }
]

const route = useRoute()

function getActiveRoute(_route: (typeof routes)[number]) {
  return route.path === _route.path
}
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t"
  >
    <div class="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
      <RouterLink
        v-for="r in routes"
        :key="r.id"
        :to="r.path"
        class="flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-md transition-colors"
        :class="
          getActiveRoute(r)
            ? 'text-primary'
            : 'text-muted-foreground hover-elevate'
        "
      >
        <Icon
          :icon="r.iconName"
          class="w-5 h-5"
          :class="getActiveRoute(r) ? 'fill-current' : ''"
        />
        <span class="text-xs font-medium">{{ r.label }}</span>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped></style>
