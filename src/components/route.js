import { createRouter,createWebHashHistory } from 'vue-router'

const routes = [
  {path: '/', name: '首页', component: () => import('../views/index.vue')},
  {path: '/wp-page', name: 'wp-page', component: () => import('../views/wp-page.vue')},
]

const router = createRouter({
  history : createWebHashHistory(),
  routes
})

export default router