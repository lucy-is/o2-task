import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue'
// import ManagementView from '../views/UserManageView.vue'
// import SettingView from '../views/UserSettingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('@/views/UserManageView.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/UserSettingView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
