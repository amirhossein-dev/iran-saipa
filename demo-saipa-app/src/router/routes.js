const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/login' },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'select-role', component: () => import('pages/SelectRolePage.vue') },
      { path: 'worker-dashboard', component: () => import('pages/WorkerDashboard.vue') },
      // سایر صفحات
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]
export default routes
