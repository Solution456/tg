<script setup lang="ts">
import { computed } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'reka-ui'

const props = defineProps<{
  value: number
}>()

const indicatorStyles = computed(() => ({
  transform: `translateX(-${100 - (props.value || 0)}%)`
}))
</script>

<template>
  <ProgressRoot
    :model-value="value"
    class="relative h-4 w-full overflow-hidden rounded-full bg-secondary"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="indicatorStyles"
    />
  </ProgressRoot>
</template>
