let gulp = require('gulp');
let runSequence = require('gulp4-run-sequence');


gulp.task('build', (cb) => {
  'use strict';
  runSequence('clean', ['copy:build', 'pug:build', 'sass', 'js:build'], cb);
  // Remove sprity because of a but in sprity-lwip
  // return runSequence('clean', ['copy:build', 'pug:build', 'sass', 'js:build', 'sprity:build'], cb);
});
