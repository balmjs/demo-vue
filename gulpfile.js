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
      common: ['vue', 'vue-router', 'vue-resource', 'vue-i18n'],
      main: './app/js/main.js'
    },
    vendors: ['common'],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }]
  },
  cache: true
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.copy('./app/data/*', './dist/data');
  }
});
