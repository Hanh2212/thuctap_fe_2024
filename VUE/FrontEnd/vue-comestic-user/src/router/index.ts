import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '../layouts/DefaultLayout.vue'
import OnlyChildren from '../layouts/OnlyChildren.vue'

import Home from '../components/Home.vue'
import Product from '../components/Product.vue'

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
        path: '1',
        name: 'product',
        component: Product
      }
    ]
  },
  {
    path: '/product',
    component: OnlyChildren,
    children: [
      {
        path: 'product',
        name: 'Product',
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
