import { createRouter, createWebHistory } from 'vue-router'
import Login from 'src/views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ],
})

export default router
