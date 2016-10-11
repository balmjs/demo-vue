import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import App from './app';
import init from './router/index';

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

init(Vue, routes => {
  const router = new VueRouter({
    routes
  });

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
});
