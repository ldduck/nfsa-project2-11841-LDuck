import { createRouter, createWebHistory } from 'vue-router'
import InfoView from '../views/InfoView.vue'
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
      path: '/details',
      name: 'details',
      component: InfoView
    }
  ]
})

export default router
