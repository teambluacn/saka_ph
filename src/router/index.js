import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/Home.vue'
import landing from '../views/landing_page.vue'
import forum from '../views/asembliya.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: landing
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/asembliya',
    name: 'forum',
    component: forum,
  }
]

const router = new VueRouter({
  routes
})

export default router
