import { createRouter,createWebHashHistory } from 'vue-router'


const routes = [
  {path: '/', name: '首页', component: () => import('../views/index.vue')},
  {path: '/page', name: 'wpPage', component: () => import('../views/page.vue')},
  {path: '/pop', name: 'wpPop', component: () => import('../views/pop.vue')},
  {path: '/form-row', name: 'wpFormRow', component: () => import('../views/form-row.vue')}
]

const router = createRouter({
  history : createWebHashHistory(),
  routes
})

export default router