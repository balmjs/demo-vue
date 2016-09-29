const routes = {
  '/login': {
    name: 'login',
    component: resolve => {
      require(['../admin/dashboard'], resolve);
    }
  },
  '/dashboard': {
    name: 'dashboard',
    component: resolve => {
      require(['../admin/dashboard'], resolve);
    }
  },
  '/user': {
    name: 'user',
    component: resolve => {
      require(['../admin/user'], resolve);
    },
    subRoutes: {
      '/': {
        name: 'user.list',
        component: resolve => {
          require(['../admin/user-list'], resolve);
        }
      },
      '/detail/:id': {
        name: 'user.detail',
        component: resolve => {
          require(['../admin/user-detail'], resolve);
        }
      }
    }
  }
};

export default routes;
