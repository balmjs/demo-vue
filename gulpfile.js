var balm = require('balm');

balm.config = {
  // cache: true,
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
  scripts: {
    entry: {
      common: ['vue', 'vue-router', 'vue-resource', 'vue-i18n'],
      main: './app/js/main.js'
    },
    vendors: ['common'],
    // chunkFilename: '[chunkhash].js',
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    extensions: ['.vue']
  }
};

balm.go();
