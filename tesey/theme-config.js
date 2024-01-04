let auth = require('./pass');

module.exports = {
  name: 'tesey',
  sync: {
    proxy: 'tesey.art-coral.com',
  },
  js: {
    // do you needto minify js?
    minify: false,
    // do you need to concat js?
    concat: false,
  },
  css: {
    // do you need to minify css?
    clean: false,
    // do you want to add .min suffix to minified file?
    rename: false,
    // do you need a sourcemap?
    sourcemap: true,
  },
  ftp: {
    host: 'tesey.art-coral.com',
    user: auth.user,
    password: auth.password,
    path: "/www/tesey.art-coral.com/themes/tesey/",
  },
}