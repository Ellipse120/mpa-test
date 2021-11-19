import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/other/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/other/views/About')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'bad-not-found',
    component: () => import('@/components/NotFound')
  }
]

const router = createRouter({
  history: createWebHistory('/other/'),
  routes
})

export default router
