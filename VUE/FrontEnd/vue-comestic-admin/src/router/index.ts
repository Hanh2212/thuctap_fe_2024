import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import OnlyChildren from '@/layouts/OnlyChildren.vue';

import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          breadcrumbName: 'Home',
          requiresAuth: true
        }
      },
      {
        path: 'product',
        name: 'Product',
        component: Product,
        meta: {
          breadcrumbName: 'Product',
          requiresAuth: true 
        }
      }
    ]
  },{
    path: '/',
    component: OnlyChildren,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const store = useStore();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const user = store.getters.getUser;

  if (requiresAuth && !user) {
    next({ name: 'Login' }); 
  } else {
    next();
  }
});


export default router;
