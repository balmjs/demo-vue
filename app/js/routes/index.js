const webRoutes = require('./web').default;

let useBackendRouter = true; // change it, as you wish

const startRouter = (Vue, fn) => {
  let routes = {};

  if (useBackendRouter) {
    Vue.http.get('/data/router.json').then(response => {
      for (let value1 of response.body) {
        routes[value1.url] = {
          name: value1.name,
          component: resolve => {
            require(['../admin/' + value1.component], resolve);
          }
        };

        if (typeof value1.subRoutes !== 'undefined') {
          routes[value1.url].subRoutes = {};
          for (let value2 of value1.subRoutes) {
            routes[value1.url].subRoutes[value2.url] = {
              name: value2.name,
              component: resolve => {
                require(['../admin/' + value2.component], resolve);
              }
            };
          }
        }
      }

      fn(routes);
    });
  } else {
    fn(webRoutes);
  }
};

export default startRouter;
