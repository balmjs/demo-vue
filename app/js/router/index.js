let useBackendRouter = false; // change it, as you wish

const init = (Vue, fn) => {
  if (useBackendRouter) {
    Vue.http.get('/data/router.json').then(response => {
      let routes = [];

      for (let value1 of response.body) {
        let route = {
          path: value1.path,
          name: value1.name
        };

        if (typeof value1.children !== 'undefined') {
          switch (value1.path) { // TODO: The 3rd argument of require.ensure has bug
            case '/user':
              route.component = r => require.ensure([], () => r(require('../components/' + value1.component)), '/user');

              route.children = [];
              for (let value2 of value1.children) {
                let subRoute = {
                  path: value2.path,
                  name: value2.name,
                  component: r => require.ensure([], () => r(require('../components/' + value2.component)), '/user')
                };
                route.children.push(subRoute);
              }
              break;
          }
        } else {
          route.component = resolve => require(['../components/' + value1.component], resolve);
        }

        routes.push(route);
      }

      fn(routes);
    });
  } else {
    fn(require('./web'));
  }
};

export default init;
