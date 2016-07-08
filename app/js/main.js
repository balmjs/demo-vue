import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import VueResource from 'vue-resource';
import App from './app';

Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueResource);

// ready translated locales
import { locales } from './config/lang';

// set lang
Vue.config.lang = 'en';

// set locales
Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang]);
});

let router = new VueRouter({
  hashbang: false
});

let useBackendRouter = true;

if (useBackendRouter) {
  Vue.http.get('/data/router.json').then(response => {
    // success callback
    let routerMap = {};
    for (let value1 of response.json()) {
      routerMap[value1.url] = {
        name: value1.name,
        component: resolve => {
          require(['./admin/' + value1.component], resolve);
        }
      };
      if (typeof value1.subRoutes !== 'undefined') {
        routerMap[value1.url].subRoutes = {};
        for (let value2 of value1.subRoutes) {
          routerMap[value1.url].subRoutes[value2.url] = {
            name: value2.name,
            component: resolve => {
              require(['./admin/' + value2.component], resolve);
            }
          };
        }
      }
    }

    router.map(routerMap);
  }, response => {
    // error callback
  });
} else {
  router.map({
    '/login': {
      name: 'login',
      component: resolve => {
        require(['./admin/dashboard'], resolve);
      }
    },
    '/dashboard': {
      name: 'dashboard',
      component: resolve => {
        require(['./admin/dashboard'], resolve);
      }
    },
    '/user': {
      name: 'user',
      component: resolve => {
        require(['./admin/user'], resolve);
      },
      subRoutes: {
        '/': {
          name: 'user.list',
          component: resolve => {
            require(['./admin/user-list'], resolve);
          }
        },
        '/detail/:id': {
          name: 'user.detail',
          component: resolve => {
            require(['./admin/user-detail'], resolve);
          }
        }
      }
    }
  });
}

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.afterEach(transition => {
  console.log(transition.to);
});

router.alias({
  '/': '/login'
});

router.start(App, '#app');
