import { createRouter, createWebHistory } from 'vue-router'
import { HomeView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/anys',
      name: 'anys',
      component: () => import('@/views/YearsListView.vue'),
    },
    {
      path: '/detall_any/:year',
      name: 'detall any',
      component: () => import('@/views/YearDetailView.vue'),
      props: (route) => ({ year: parseInt(route.params.year) }),
    },
    {
      path: '/detall_centre/:center/:year',
      name: 'detall centre',
      component: () => import('@/views/CenterDetailView.vue'),
      props: (route) => ({ center: route.params.center, year: parseInt(route.params.year) }),
    },
  ],
})

export default router
