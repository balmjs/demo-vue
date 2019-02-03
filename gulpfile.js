const balm = require('balm');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  cache: true
};

balm.go(mix => {
  if (balm.config.production) {
    mix.copy('./app/data/*', './dist/data');
  }
});
