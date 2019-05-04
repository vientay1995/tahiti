var conf = require('../config.json');
var gulp = require('gulp');
var zip = require('gulp-zip');
var runSequence = require('gulp4-run-sequence');
var git = require('gulp-git');

gulp.task('delivery', function (cb){
    runSequence('compile', 'zip:compile', cb);
});

gulp.task('zip:build', function () {
    git.exec({args : 'describe --tags'}, function (err, stdout) {
        var name;
        if (err) {
            name = 'no-tag'
        } else {
            name = stdout.replace(/\r?\n|\r/g,"");
        }
        return gulp.src([conf.base.build + '*', conf.base.build + '.*'])
        .pipe(zip('release-build-' + name + '.zip'))
        .pipe(gulp.dest(conf.base.dist));
    });
});

gulp.task('zip:compile', function () {
    git.exec({args : 'describe --tags'}, function (err, stdout) {
        var name;
        if (err) {
            name = 'no-tag'
        } else {
            name = stdout.replace(/\r?\n|\r/g,"");
        }
        return gulp.src([conf.base.compile + '*', conf.base.compile + '.*'])
        .pipe(zip('release-compile-' + name + '.zip'))
        .pipe(gulp.dest(conf.base.dist));
    });
});
