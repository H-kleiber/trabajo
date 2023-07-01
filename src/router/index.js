import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:() => import ('../views/HomeView.vue')
    },
    {
      path: '/beneficios',
      name: 'beneficios',
      component: () => import('../views/BeneficiosView.vue')
    },
    {
      path: '/promociones',
      name: 'promociones',
      component: () => import('../views/PromocionesView.vue')
    },
    {
      path: '/locales',
      name: 'locales',
      component: () => import('../views/LocalesView.vue')
    },
    {
      path: '/zonasdereparto',
      name: 'zonasdereparto',
      component: () => import('../views/ZonasderepartoView.vue')
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/NosotrosView.vue')
    }
  ]
})

export default router
