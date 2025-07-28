import CheckoutSuccess from '@/presentation/pages/CheckoutSuccess.vue'
import CheckoutCancel from '@/presentation/pages/CheckoutCancel.vue'
import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import HomePage from '@/presentation/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  { path: '/home', component: HomePage },
  { path: '/checkout/success', component: CheckoutSuccess },
  { path: '/checkout/cancel', component: CheckoutCancel },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
