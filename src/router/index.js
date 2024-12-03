import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/computed',
      name: 'Computed',
      component: () => import('@/views/ComputedView.vue')
    },
    {
      path: '/route',
      name: 'Route',
      component: () => import('@/views/RouteExampleView.vue'),
      children: [
        {
          path: 'desti/:id',
          name: 'desti',
          component: () => import('@/views/DestiView.vue'),
          props: (route) => ({ ...route.params, id: parseInt(route.params.id) })
        }
      ]
    }
  ]
})

export default router
