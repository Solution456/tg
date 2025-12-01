<script setup lang="ts">
import { onMounted } from 'vue'

import LoyaltyCard from '@/modules/loyalty/components/LoyaltyCard.vue'
import { useLoyalty } from '@/modules/loyalty/composables/use-loyalty'
import AppPageLayout from '@/shared/layouts/AppPageLayout.vue'

const { loyalty, getLoyalty } = useLoyalty()

// TODO: userrId
onMounted(() => getLoyalty('1'))
</script>

<template>
  <AppPageLayout
    title="Программа лояльности"
    description="Отслеживайте награды и получайте бесплатные чебуреки"
  >
    <div class="max-w-lg mx-auto px-4 py-6 space-y-6">
      <LoyaltyCard
        v-if="loyalty"
        v-bind="loyalty"
      />
    </div>
  </AppPageLayout>
</template>

<style scoped></style>
