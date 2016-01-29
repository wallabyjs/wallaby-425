module.exports = function (wallaby) {
  var wallabyWebpack = require('wallaby-webpack');
  var wallabyPostprocessor = wallabyWebpack({});
  return {
    files: [
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      {pattern: 'src/**', load: false}
    ],
    tests: [
      {pattern: 'test/**', load: false}
    ],

    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        presets: ['es2015', 'react']
      })
    },

    reportConsoleErrorAsError: true,

    testFramework: 'qunit',

    postprocessor: wallabyPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    },

    // to make sure we run all tests in one sandbox
    workers: {initial: 1, regular: 1},

    debug: true
  }
};
