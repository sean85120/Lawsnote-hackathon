import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Map from '../views/Map.vue'
import 公司型態 from '../views/公司型態.vue'
import 負責人 from '../views/負責人.vue'
import 商業模式 from '../views/商業模式.vue'
import 公司名稱 from '../views/公司名稱.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/map',
    name: 'map',
    component: Map
  },

  {
    path: '/map/公司型態',
    name: '公司型態',
    component: 公司型態,
  },

  {
    path: '/map/負責人',
    name: '負責人',
    component: 負責人,
  },

  {
    path: '/map/商業模式',
    name: '商業模式',
    component: 商業模式,
  },

  {
    path: '/map/公司名稱',
    name: '公司名稱',
    component: 公司名稱,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
