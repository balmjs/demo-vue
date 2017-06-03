var balm = require('balm');

balm.config = {
  roots: {
    source: 'app'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images',
      font: 'fonts'
    }
  },
  styles: {
    ext: 'scss'
  },
  scripts: {
    entry: {
      common: ['vue', 'vue-router', 'vuex', 'axios'],
      main: './app/scripts/main.js'
    },
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /balm-ui.src.*?js$/,
      loader: 'babel'
    }],
    alias: {
      'vue': balm.config.production ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
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
