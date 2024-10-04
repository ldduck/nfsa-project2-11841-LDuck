import { createRouter, createWebHistory } from 'vue-router'
import AlternateView from '../views/AlternateView.vue'
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
      path: '/alternate',
      name: 'alternate',
      component: AlternateView
    }
  ]
})

export default router
