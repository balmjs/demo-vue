var balm = require('balm');

balm.config = {
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      common: ['vue', 'vue-router', 'vuex', 'axios', 'vue-i18n'],
      main: './app/js/main.js'
    },
    vendors: ['common'],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /balm-ui.src.*?js$/,
      loader: 'babel'
    }],
    alias: {
      vue: 'vue/dist/vue.js', // https://github.com/vuejs-templates/webpack/issues/215
      'balm-ui': 'balm-ui/src/index.js'
    }
  },
  cache: true
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.copy('./app/data/*', './dist/data');
  }
});
