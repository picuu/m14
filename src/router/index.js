import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aigua',
      name: 'aigua',
      component: () => import('@views/WaterView.vue')
    },
    {
      path: '/aigua/:station',
      name: 'station',
      component: () => import('@views/StationView.vue'),
      props: (route) => ({ stationName: route.params.station })
    },
    {
      path: '/compra',
      name: 'compra',
      component: () => import('@views/CartView.vue')
    }
  ]
})

export default router
