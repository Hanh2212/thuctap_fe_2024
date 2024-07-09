import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import OnlyChildren from '@/layouts/OnlyChildren.vue';

import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import Login from '@/views/Login.vue';
import BillSell from '@/views/BillSell.vue';
import ImportBill from '@/views/ImportBill.vue';
import News from '@/views/News.vue';
import Rate from '@/views/Rate.vue';
import Category from '@/views/Category.vue';
import CategoryOffer from '@/views/CategoryOffer.vue';
import Manufactor from '@/views/Manufactor.vue';
import Distributor from '@/views/Distributor.vue';

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
      },
      {
        path: 'billsell',
        name: 'BillSell',
        component: BillSell,
        meta: {
          breadcrumbName: 'BillSell',
          requiresAuth: true 
        }
      },
      {
        path: 'importbill',
        name: 'ImportBill',
        component: ImportBill,
        meta: {
          breadcrumbName: 'ImportBill',
          requiresAuth: true 
        }
      },
      {
        path: 'news',
        name: 'News',
        component: News,
        meta: {
          breadcrumbName: 'News',
          requiresAuth: true 
        }
      },
      {
        path: 'rate',
        name: 'Rate',
        component: Rate,
        meta: {
          breadcrumbName: 'Rate',
          requiresAuth: true 
        }
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
        meta: {
          breadcrumbName: 'Category',
          requiresAuth: true 
        }
      },
      {
        path: 'categoryoffer',
        name: 'CategoryOffer',
        component: CategoryOffer,
        meta: {
          breadcrumbName: 'CategoryOffer',
          requiresAuth: true 
        }
      },
      {
        path: 'manufactor',
        name: 'Manufactor',
        component: Manufactor,
        meta: {
          breadcrumbName: 'Manufactor',
          requiresAuth: true 
        }
      },
      {
        path: 'distributor',
        name: 'Distributor',
        component: Distributor,
        meta: {
          breadcrumbName: 'Distributor',
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
