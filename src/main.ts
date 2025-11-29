import { createApp } from 'vue'
import { retrieveLaunchParams } from '@tma.js/sdk-vue'

// Mock the environment in case, we are outside Telegram.
import './mock-env'

import App from './App.vue'
import { errorHandler } from './error-handler'
import { init } from './init'
import router from './router'

import './assets/index.css'

const launchParams = retrieveLaunchParams()
const { tgWebAppPlatform: platform } = launchParams
const debug =
  (launchParams.tgWebAppStartParam || '').includes('debug') ||
  import.meta.env.DEV

// Configure all application dependencies.
init({
  debug,
  eruda: debug && ['ios', 'android'].includes(platform),
  mockForMacOS: platform === 'macos'
}).then(() => {
  const app = createApp(App)
  app.config.errorHandler = errorHandler
  app.use(router)
  app.mount('#app')
})
