let conf = require('../config.json');
let webpackConfig = require('../webpack.config');
let gulp = require('gulp');

gulp.task('copy:build', function () {
    //Root files
    gulp.src([
            conf.base.src + conf.path.root + conf.files.root,
            conf.base.src + conf.path.root + conf.files.hidden
        ])
        .pipe(gulp.dest(conf.base.build));
    //Fonts + Translations files + images
    gulp.src([
            conf.base.src + conf.path.fonts + conf.files.fonts,
            //conf.base.src + conf.path.i18n + conf.files.i18n,
            conf.base.src + conf.path.images + conf.files.images
        ], {base: './' + conf.base.src})
        .pipe(gulp.dest(conf.base.build));
    //Scripts
    gulp.src(conf.vendor.jsCss, {base: './'})
        .pipe(gulp.dest(conf.base.build));
    return gulp.src(conf.vendor.assets, {base: './'})
        .pipe(gulp.dest(conf.base.build));
});

gulp.task('copy:compile', function () {
    //Root files
    gulp.src([
            conf.base.src + conf.path.root + conf.files.root,
            conf.base.src + conf.path.root + conf.files.hidden
        ])
        .pipe(gulp.dest(conf.base.compile));
    //Fonts + images
    gulp.src([
            conf.base.src + conf.path.fonts + conf.files.fonts
        ], {base: './' + conf.base.src})
        .pipe(gulp.dest(conf.base.compile));
        
    return gulp.src(conf.base.build + conf.path.js + webpackConfig.output.filename)
        .pipe(gulp.dest(conf.base.compile + conf.path.js + webpackConfig.output.filename ));
});
