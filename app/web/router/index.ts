import Vue from 'vue';
import VueRouter from 'vue-router';
import { article } from './route/article';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        redirect: '/article'
      },
      article,
      {
        path: '/login',
        component: () => import('@/page/login/login.vue'),
        meta: {
          noLayout: true
        }
      },
      {
        path: '*',
        component: () => import('@/page/admin/notfound/index.vue')
      }
    ]
  });
}
