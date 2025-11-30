<script setup lang="ts">
defineProps<{
  image: string
  alt: string
}>()
</script>

<template>
  <img
    :src="image"
    :alt="alt"
    class="w-16 h-16 rounded-lg object-cover"
  />
</template>
