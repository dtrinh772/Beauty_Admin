import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/appointment',
      children: [
        {
          path: 'appointment',
          component: () => import('@/views/HomeView.vue'),
          name: 'Appointment',
          meta: {
            title: 'Appointment',
            icon: 'bi-house'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    }
  ]
})

export default router
