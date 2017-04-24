import auth from '../auth';

const Login = resolve => require(['../views/login'], resolve);
const UI = resolve => require(['../views/ui'], resolve);

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
};

const baseRoutes = [{
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/logout',
  name: 'logout',
  beforeEnter(to, from, next) {
    auth.logout();
    next('/');
  }
}, {
  path: '/ui',
  name: 'ui',
  component: UI
}];

export {
  baseRoutes,
  requireAuth
};
