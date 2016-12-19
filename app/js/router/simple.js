const Home = require('../views/home');
const Dashboard = require('../views/dashboard');
const UserIndex = require('../views/user/index');
const UserList = require('../views/user/list-old');
const UserCreate = require('../views/user/create');
const UserDetail = require('../views/user/detail');
const UI = require('../views/ui');

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
}, {
  path: '/ui',
  name: 'ui',
  component: UI
}];

export default routes;
