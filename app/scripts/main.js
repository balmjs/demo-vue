import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import axios from 'axios'; // retiring vue-resource
import App from './app';
import init from './router/index';

Vue.use(VueRouter);
Vue.prototype.$http = axios;

init(routes => {
  const router = new VueRouter({
    routes
  });

  router.afterEach((to, from) => {
    document.querySelector('title').innerHTML = to.name;
  });

  new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
  });
});
