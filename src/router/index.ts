import { createRouter, createWebHistory } from 'vue-router'
import SideMenu from '../layouts/side-menu/Main.vue'
const routes = [
  {
    path: '/',
    component: SideMenu,
    children: [
      {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Dashboard.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/Main.vue')
  },
  {
    path: '/error-page',
    name: 'error-page',
    component: () => import('../views/error-page/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/error-page/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

export default router
