let gulp = require('gulp');
let runSequence = require('gulp4-run-sequence');

var requireDir = require('require-dir')('./gulp/tasks', { recurse: true });

gulp.task('default', function (cb) {
    runSequence('build', ['watch', 'browser-sync:build'], cb);
});
console.log("Watching file src");
gulp.task('run:compile', function (cb) {
    runSequence('compile', 'browser-sync:compile', cb);
});