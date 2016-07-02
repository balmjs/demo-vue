var balm = require('balm');

balm.config = {
  // cache: true,
  static: 'async',
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
    // chunkFilename: '[chunkhash].js',
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }],
    extensions: ['.vue']
  }
};

balm.go();
