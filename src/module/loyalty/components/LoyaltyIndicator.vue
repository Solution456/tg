<script setup lang="ts">
defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <div
    class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium"
    :class="
      isActive
        ? 'bg-primary text-primary-foreground'
        : 'bg-muted text-muted-foreground'
    "
  >
    <slot />
  </div>
</template>
