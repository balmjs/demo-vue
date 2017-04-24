import { baseRoutes, requireAuth } from './base';

const Home = resolve => require(['../views/home'], resolve);
const Dashboard = resolve => require(['../views/dashboard'], resolve);
const UserIndex = resolve => require(['../views/user/index'], resolve);
const UserList = resolve => require(['../views/user/list'], resolve);
const UserCreate = resolve => require(['../views/user/create'], resolve);
const UserDetail = resolve => require(['../views/user/detail'], resolve);

const subRoutes = [{
  path: '/',
  name: 'home',
  component: Home,
  beforeEnter: requireAuth
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  beforeEnter: requireAuth
}, {
  path: '/user',
  name: 'user',
  component: UserIndex,
  beforeEnter: requireAuth,
  children: [{
    path: 'list',
    name: 'user.list',
    component: UserList
  }, {
    path: 'create',
    name: 'user.create',
    component: UserCreate
  }, {
    path: 'detail/:id',
    name: 'user.detail',
    component: UserDetail
  }]
}];

const routes = baseRoutes.concat(subRoutes);

export default routes;
