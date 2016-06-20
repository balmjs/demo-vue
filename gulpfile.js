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
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    extensions: ['.vue']
  }
};

balm.go();
