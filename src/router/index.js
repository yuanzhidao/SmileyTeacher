import { createRouter, createWebHistory } from 'vue-router'
import Homeview from '../pages/Homeview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: Homeview
    },
    {
      path: '/chq',
      name: '蔡汉卿',
      component: () => import('../pages/Caihanqing.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
