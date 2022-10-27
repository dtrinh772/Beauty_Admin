import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(),
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
            icon: 'bi bi-house'
          }
        }
      ]
    },
    {
      path: '/appointment',
      component: Layout,
      children: [
        {
          path: '/appointment',
          component: () => import('@/views/Appointment/Appointment.vue'),
          name: 'Appoiment',
          meta: {
            title: 'Appointment',
            icon: 'bi bi-calendar3'
          }
        }
      ]
    },
    {
      path: '/setting',
      component: Layout,
      children: [
        {
          path: '/setting',
          component: () => import('@/views/Settings/AppSetting.vue'),
          name: 'Setting',
          meta: {
            title: 'Setting',
            icon: 'bi-tools'
          }
        }
      ]
    },
    {
      path: '/report',
      component: Layout,
      redirect: '/report/manage',
      meta: {
        title: 'Report',
        icon: 'bi-card-list'
      },
      children: [
        {
          path: 'manage',
          component: () => import('@/views/Report/Reports.vue'),
          name: 'Manage Report',
          meta: {
            title: 'Manage Report',
            icon: 'bi-clipboard-check'
          }
        },
        {
          path: 'history',
          component: () => import('@/views/Report/ReportsHistory.vue'),
          name: 'History Report',
          meta: {
            title: 'History Report',
            icon: 'bi-clipboard-data'
          }
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue'),
      meta: { hidden: true }
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
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})

// router.beforeEach(() => {
//   // reset config to initial state
//   store.commit(Mutations.RESET_LAYOUT_CONFIG)

//   store.dispatch(Actions.VERIFY_AUTH)

//   // Scroll page to top on every route change
//   setTimeout(() => {
//     window.scrollTo(0, 0)
//   }, 100)
// })

export default router
