const Home = resolve => require(['../views/home'], resolve);
const Dashboard = resolve => require(['../views/dashboard'], resolve);
const UserIndex = r => require.ensure([], () => r(require('../views/user/index')), '/user');
const UserList = r => require.ensure([], () => r(require('../views/user/list')), '/user');
const UserCreate = r => require.ensure([], () => r(require('../views/user/create')), '/user');
const UserDetail = r => require.ensure([], () => r(require('../views/user/detail')), '/user');

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard
}, {
  path: '/user',
  name: 'user',
  component: UserIndex,
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

export default routes;
