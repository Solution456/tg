<script setup lang="ts">
import AppPageLayoutHeaderDescription from './AppPageLayoutHeaderDescription.vue'
import AppPageLayoutHeaderTitle from './AppPageLayoutHeaderTitle.vue'
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <header class="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b">
    <div class="max-w-lg mx-auto px-4 py-4">
      <slot
        name="header-content"
        :title="title"
        :description="description"
      >
        <AppPageLayoutHeaderTitle>
          {{ title }}
        </AppPageLayoutHeaderTitle>
        <AppPageLayoutHeaderDescription>
          {{ description }}
        </AppPageLayoutHeaderDescription>
      </slot>
    </div>
  </header>
</template>

<style scoped></style>
