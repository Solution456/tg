<script setup lang="ts">
import { useBackButton } from '@/composables/use-back-button'

useBackButton()
</script>

<template>
  <RouterView />
</template>
