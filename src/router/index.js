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
      path: '/exercici1',
      name: 'exercici1',
      component: () => import('@/views/Exercici1View.vue'),
      children: [
        {
          path: ':id',
          name: 'productDetail',
          component: () => import('@/components/ex1/ProductDetail.vue')
        }
      ]
    },
    {
      path: '/exercici2',
      name: 'exercici2',
      component: () => import('@/views/Exercici2View.vue')
    },
    {
      path: '/exercici3',
      name: 'exercici3',
      component: () => import('@/views/Exercici3View.vue')
    }
  ]
})

export default router
