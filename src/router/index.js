import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/account/',
      children : [
        {
          path : 'login',
          name : 'login',
          component : () => import('../views/auth/Login.vue')
        },
        {
          path : 'register',
          name : 'register',
          component : () => import('../views/auth/Register.vue')
        },
      ]
    },
    {
      path:'/machinery/',
      children : [
        {
          path : '',
          name : 'machine',
          component : () => import('../views/rent/List.vue')
        },
        {
          path : ':slug',
          name : 'detail',
          component : () => import('../views/rent/Detail.vue')
        },
      ]
    },
  ]
})

export default router
