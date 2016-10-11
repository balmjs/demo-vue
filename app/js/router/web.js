const Home = resolve => require(['../components/home'], resolve);
const Dashboard = resolve => require(['../components/dashboard'], resolve);
const User = r => require.ensure([], () => r(require('../components/user')), '/user');
const UserList = r => require.ensure([], () => r(require('../components/user-list')), '/user');
const UserDetail = r => require.ensure([], () => r(require('../components/user-detail')), '/user');

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
}, {
  path: '/user',
  name: 'user',
  component: User,
  children: [{
    path: 'list',
    name: 'user.list',
    component: UserList
  }, {
    path: 'detail/:id',
    name: 'user.detail',
    component: UserDetail
  }]
}];

module.exports = routes;
