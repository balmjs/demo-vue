const balm = require('balm');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

balm.config = {
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'scss'
  },
  scripts: {
    entry: {
      lib: ['vue'],
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
  assets: {
    cache: true
  }
};

balm.go();
