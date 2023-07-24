import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'contest',
          name:'contest',
          component: () => import('../views/ContestView.vue')
        },
        {
          path: 'problem',
          name:'problem',
          component: () => import('../views/ProblemView.vue')
        },
        {
          path: 'draft',
          name:'draft',
          component: () => import('../views/DraftView.vue')
        },
        {
          path: 'login',
          name:'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: 'register',
          name:'register',
          component: () => import('../views/RegisterView.vue')
        },
        {
          path: 'reset_password',
          name:'reset-password',
          component: () => import('../views/ResetPasswordView.vue')
        },
        {
          path: '',
          name:'home-page',
          component: () => import('../views/HomePageView.vue')
        },
      ]
    },
  ],
})

export default router
