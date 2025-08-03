const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/select-role',
    component: () => import('pages/SelectRolePage.vue'),
  },
  {
    path: '/supervisor',
    component: () => import('pages/SupervisorDashboardPage.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
