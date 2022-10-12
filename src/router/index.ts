import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Appointment from '../views/HomeView.vue'
import Websetting from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: 'appointment',
          component: Appointment
        },
        {
          path: 'setting',
          component: Websetting
        }
      ]
    }
  ]
})

export default router
