import Home from '../views/home';
import Dashboard from '../views/dashboard';
import UserIndex from '../views/user/index';
import UserList from '../views/user/list-old';
import UserCreate from '../views/user/create';
import UserDetail from '../views/user/detail';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'user',
    component: UserIndex,
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

export default routes;
