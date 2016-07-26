var balm = require('balm');

balm.config = {
  static: true,
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'css',
      js: 'js',
      img: 'img'
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
    }],
    extensions: ['.vue']
  }
};

balm.go(function(mix) {
  if (balm.config.production) {
    mix.copy('./app/data/*', './dist/data');
  }
});
