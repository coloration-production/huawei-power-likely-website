import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import 'aos/dist/aos.css'
import 'uno.css'
import './styles/main.css'

const pinia = createPinia()

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  async (ctx) => {
    const commonStore = useCommonStore(pinia)
    try {
      await commonStore.fetchBaseData()
    }
    catch (error) {
      console.error('Failed to fetch base data:', error)
    }
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
