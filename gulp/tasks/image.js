var conf = require('../config.json');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var imagemin = require('gulp-imagemin');
// var sprity = require('sprity');

gulp.task('imagemin:compile', function() {
    return gulp.src([conf.base.src + conf.path.images + conf.files.images], {base: './' + conf.base.src})
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(conf.base.compile));
});

gulp.task('sprity:build', function() {
    return sprity.src({
      src: conf.base.src + conf.path.sprites + conf.files.images,
      style: './sprites.css',
      cssPath: '../img'
    })
    .pipe(gulpif('*.png', gulp.dest(conf.base.build + conf.path.images), gulp.dest(conf.base.build + conf.path.css)));
});
