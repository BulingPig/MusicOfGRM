import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const routes = [
  {
    path: '/',
    component: () => import('@/views/login/index'),
    name: 'login',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name: 'login',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index'),
    name: 'home',
  }

]


export default new Router({
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})