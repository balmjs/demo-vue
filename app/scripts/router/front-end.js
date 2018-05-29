import { baseRoutes, requireAuth } from './base';

const Home = () => import('../views/home');
const Dashboard = () => import('../views/dashboard');
const UserIndex = () => import('../views/user/index');
const UserList = () => import('../views/user/list');
const UserCreate = () => import('../views/user/create');
const UserDetail = () => import('../views/user/detail');

const subRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/user',
    name: 'user',
    component: UserIndex,
    beforeEnter: requireAuth,
    children: [
      {
        path: 'list',
        name: 'user.list',
        component: UserList
      },
      {
        path: 'create',
        name: 'user.create',
        component: UserCreate
      },
      {
        path: 'detail/:id',
        name: 'user.detail',
        component: UserDetail
      }
    ]
  }
];

const routes = baseRoutes.concat(subRoutes);

export default routes;
