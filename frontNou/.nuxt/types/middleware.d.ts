import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/m14/Documents/projectesVue3/frontNou/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}