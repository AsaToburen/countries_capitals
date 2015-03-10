// Karma configuration
// Generated on Wed Mar 04 2015 13:13:21 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './app/bower_components/angular/angular.js',
      './app/bower_components/angular-route/angular-route.js',
      './app/bower_components/angular-animate/angular-animate.js',
      './app/bower_components/angular-mocks/angular-mocks.js',
      './app/js/cc-app.js',
      './app/js/cc-appSpec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    preprocessors: {
      // source files, that you wanna generate coverage for 
      // do not include tests or libraries 
      // (these files will be instrumented by Istanbul) 
      'src/*.js': ['coverage']
    },



    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },




    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
