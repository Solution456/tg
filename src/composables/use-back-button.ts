import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { backButton } from '@tma.js/sdk-vue'

export function useBackButton() {
  let offClick: () => void = () => {}
  const route = useRoute()
  const router = useRouter()

  watch(
    () => route.name,
    () => {
      if (route.name === 'index') {
        backButton.hide()
        offClick()
      } else if (!backButton.isVisible()) {
        backButton.show()
        offClick = backButton.onClick(onBackButtonClick)
      }
    }
  )

  async function onBackButtonClick(): Promise<void> {
    await router.go(-1)
  }
}
