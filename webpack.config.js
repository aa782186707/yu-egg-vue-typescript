'use strict';
console.log(process.env.NODE_ENV)
module.exports = {
  entry: {
    'admin/home': 'app/web/framework/entry/index.ts'
  },
  lib: ['vue', 'vuex', 'vue-router', 'vuex-router-sync', 'axios'],
  alias: {
    '@': 'app/web'
  },
  loaders: {
    babel: false,
    less: true,
    sass: true,
    scss:true,
    tslint: {
      options: {
        fix: true
      }
    },
    typescript: true
  },
  plugins: {
    copy: [{
      from: 'app/web/asset',
      to: 'asset'
    }]
  }
};