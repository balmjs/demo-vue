import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import App from './app';
import startRouter from './routes/index';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueI18n);

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

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

router.afterEach(transition => {
  console.log('Successfully navigated to: ' + transition.to.path)
});

router.alias({
  '/': '/login'
});

startRouter(Vue, routes => {
  router.map(routes);
  router.start(App, '#app');
});
