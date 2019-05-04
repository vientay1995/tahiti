let conf = require('../config.json');
let gulp = require('gulp');
let sass = require('gulp-sass');
let gulpStylelint = require('gulp-stylelint');
let autoprefixer = require('gulp-autoprefixer');
let runSequence = require('gulp4-run-sequence');
let sourcemaps = require('gulp-sourcemaps');

function handleError(err) {
  console.log('ERRORRRRRRRRRRRRRRR');
  console.log(err.toString());
  this.emit('end');
}

gulp.task('sass', function (cb) {
  'use strict';
  return runSequence(['sass:lint', 'sass:bootstrap'],'sass:build', cb);
});

gulp.task('sass:lint', function () {
  'use strict';
  return gulp.src([
    conf.base.src + conf.path.sass + conf.files.sassAll,
    '!' + conf.base.src + conf.path.sass + '**/_mixins.scss'
  ])
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
  .on('error', handleError);
});

gulp.task('sass:bootstrap', function () {
  'use strict';
  return gulp.src(['./node_modules/bootstrap/scss/**/*'])
  .pipe(gulp.dest(conf.base.src + conf.path.sassBootstrap))
  .on('error', handleError);
});

gulp.task('sass:build', function () {
  'use strict';
  return gulp.src(conf.base.src + conf.path.sass + conf.files.sass)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.base.build + conf.path.css));
});
