let conf = require('../config.json');
let gulp = require('gulp');
let gulpWebpack = require('webpack-stream');
let webpack = require('webpack');
let eslint = require('gulp-eslint');
let webpackConfig = require('../webpack.config');

gulp.task('js:build', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
  .pipe(eslint({configFile: './.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(gulpWebpack(webpackConfig, webpack))
  .pipe(gulp.dest(conf.base.build + conf.path.js));
});
