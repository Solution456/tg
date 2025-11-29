<script setup lang="ts">
import AppPageLayoutHeader from './page/AppPageLayoutHeader.vue'

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div className="min-h-screen pb-24">
    <AppPageLayoutHeader
      :title="title"
      :description="description"
    />

    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
