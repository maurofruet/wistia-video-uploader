module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/angular/angular.min.js",
      "node_modules/jquery-ui/ui/widget.js",
      "node_modules/blueimp-load-image/js/load-image.all.min.js",
      "node_modules/blueimp-canvas-to-blob/js/canvas-to-blob.min.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/blueimp-gallery/js/jquery.blueimp-gallery.min.js",
      "node_modules/blueimp-file-upload/js/jquery.iframe-transport.js",
      "node_modules/blueimp-file-upload/js/jquery.fileupload.js",
      "node_modules/blueimp-file-upload/js/jquery.fileupload-process.js",
      "node_modules/blueimp-file-upload/js/jquery.fileupload-video.js",
      "node_modules/blueimp-file-upload/js/jquery.fileupload-validate.js",
      "node_modules/blueimp-file-upload/js/jquery.fileupload-angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "src/app/app.module.js",
      "src/app/wistia-video-uploader/wistia-video-uploader.component.js",
      "src/app/wistia-video-uploader/wistia-video-uploader.component.html",
      "src/app/wistia-video-uploader/wistia-video-uploader.constant.js",
      "src/app/wistia-video-uploader/wistia-video-uploader.spec.js"
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["Chrome"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
