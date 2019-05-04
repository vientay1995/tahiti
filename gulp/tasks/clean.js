let conf = require('../config.json');
let gulp = require('gulp');
let del = require('del');

gulp.task('clean', function (cb) {
  return del([conf.base.build, conf.base.compile, '.tmp'], cb);
});