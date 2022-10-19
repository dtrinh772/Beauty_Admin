import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/redirect',
      component: Layout,
      meta: { hidden: true },
      children: [
        {
          path: '/redirect/:path*',
          component: () => import('@/views/redirect/index.vue')
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/Dashboard/Dashboard.vue'),
          name: 'Dashboard',
          meta: {
            title: 'Dashboard',
            icon: 'bi-house'
          }
        }
      ]
    },
    {
      path:'/appointment',
      component: Layout,
      children: [
        {
          path: 'appointment',
          component: () => import('@/views/Appointment/Appointment.vue'),
          name: 'Appoiment',
          meta: {
            title: 'Appointment'
          }
        }
      ]
    },
    {
      path:'/setting',
      component: Layout,
      children: [
        {
          path:'setting',
          component: () => import('@/views/Settings/AppSetting.vue'),
          name: 'Setting',
          meta: {
            title: 'Setting'
          }
        }
      ]
    },
    {
      path:'/report',
      component: Layout,
      children: [
        {
          path:'/manage',
          component: () => import('@/views/Report/Reports.vue'),
          name: 'Manage Report',
          meta: {
            title: 'Manage Report'
          }
        },
        {
          path:'/history',
          component: () => import('@/views/Report/ReportsHistory.vue'),
          name: 'History Report',
          meta: {
            title: 'History Report'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue'),
      meta: { hidden: true}
    },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
    {
      path: '/404',
      component: () => import('@/views/error-page/404.vue'),
      meta: { hidden: true }
    },
    // {
    //   path: '*',
    //   redirect: '/404',
    //   meta: { hidden: true }
    // }
  ]
})

export default router
