import Vue from 'vue';
import app from './views/layouts/app';

Vue.config.productionTip = false;

new Vue({
  render: h => h(app)
}).$mount('#app');
