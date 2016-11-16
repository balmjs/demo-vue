import { baseRoutes, requireAuth } from './base';

const Home = resolve => require(['../views/home'], resolve);
const Dashboard = resolve => require(['../views/dashboard'], resolve);
const UserIndex = r => require.ensure([], () => r(require('../views/user/index')), '/user');
const UserList = r => require.ensure([], () => r(require('../views/user/list')), '/user');
const UserCreate = r => require.ensure([], () => r(require('../views/user/create')), '/user');
const UserDetail = r => require.ensure([], () => r(require('../views/user/detail')), '/user');

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

const frontEndRouter = fn => {
  fn(routes);
};

module.exports = frontEndRouter;
