const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/login' },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'select-role', component: () => import('pages/SelectRolePage.vue') },
      { path: 'taskmaster', component: () => import('pages/TaskmasterDashboard.vue') },
      { path: 'supervisor', component: () => import('pages/SupervisorDashboardPage.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/UnderConstruction.vue'),
  },
]
export default routes
