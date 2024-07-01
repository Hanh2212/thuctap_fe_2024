import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout.vue'

import Home from '@/components/Home.vue'
import Product from '@/components/Product.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'product',
        name: 'product',
        component: Product
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
