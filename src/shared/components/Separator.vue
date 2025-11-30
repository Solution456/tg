<script setup lang="ts">
import { computed } from 'vue'
import { Separator } from 'reka-ui'

const props = withDefaults(
  defineProps<{
    orientation?: 'horizontal' | 'vertical'
    decorative?: boolean
  }>(),
  {
    orientation: 'horizontal',
    decorative: true
  }
)

const classes = computed(() => {
  return {
    'h-[1px] w-full': props.orientation === 'horizontal',
    'h-full w-[1px]': props.orientation === 'vertical'
  }
})
</script>

<template>
  <Separator
    class="shrink-0 bg-border"
    :class="classes"
  />
</template>

<style scoped></style>
