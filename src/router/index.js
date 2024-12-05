import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: () => import('@/views/DestinationView.vue'),
      props: (route) => ({ id: parseInt(route.params.id) }),
      children: [
        {
          path: 'experience/:slug',
          name: 'experience',
          component: () => import('@/views/ExperienceView.vue'),
          props: (route) => ({ slug: route.params.slug, destinationId: parseInt(route.params.id) })
        }
      ]
    }
  ]
})

export default router
