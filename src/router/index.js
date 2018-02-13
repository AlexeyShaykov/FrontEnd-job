import Vue from 'vue';
import Router from 'vue-router';
import Payment from '@/Payment';
import Operators from '@/Operators';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Operators',
      component: Operators
    },
    {
      path: '/payment/:operator',
      name: 'payment',
      component: Payment
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
export default router;
