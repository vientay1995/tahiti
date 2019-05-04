var conf = require('../config.json');
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync:build', function() {
  'use strict';
  browserSync.init({
    server: {
      baseDir: conf.base.build
    },
    reloadDebounce: 2000,
    open: false,
    notify: false
  });
});

gulp.task('browser-sync:compile', function() {
  'use strict';
  browserSync.init({
    server: {
      baseDir: conf.base.compile
    },
    reloadDebounce: 2000,
    open: false,
    notify: false
  });
});

gulp.task('watch', function () {
  'use strict';
  console.log("Watching file src");
  gulp.watch(conf.base.src + conf.path.sass + conf.files.sassAll, gulp.series('sass', browserSync.reload));
  gulp.watch(conf.base.src + conf.path.js + conf.files.js, gulp.series('js:build', browserSync.reload));
  gulp.watch(conf.base.src + conf.files.pug, gulp.series('pug:build', browserSync.reload));
});
