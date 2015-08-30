var gulp = require('gulp');
var browserSync = require('browser-sync');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var dir = {
    src: {
        base: './src/',
        angular: './src/angular/',
        scripts: './src/scripts/',
        styles: './src/styles/',
        sass: './src/sass/',
        scripts: './src/scripts/'
    }
};

gulp.task('ng-annotate', function () {

    return gulp.src(dir.src.angular + '**/*.js')
               .pipe(plugins.plumber())
               .pipe(plugins.ngAnnotate({ single_quotes: true }))
               .pipe(plugins.concat('angular.app.js'))
               .pipe(gulp.dest(dir.src.scripts));

});

gulp.task('sass', function () {

    return gulp.src(dir.src.sass + 'main.scss')
               .pipe(plugins.compass({
                    sass: dir.src.sass,
                    css: dir.src.styles
                }))
               .pipe(gulp.dest(dir.src.styles))
               .pipe(browserSync.stream());

});

gulp.task('serve', ['sass', 'ng-annotate'], function () {

    browserSync.init({
        server: { baseDir: dir.src.base, index: 'index.html' },
        notify: false,
        port: 8080
    });

    gulp.watch(dir.src.sass + '**/*.scss', ['sass']);
    gulp.watch(dir.src.angular + '**/*.js', ['ng-annotate']);

    gulp.watch([dir.src.base + '**/*.html', dir.src.base + '**/*.js']).on('change', browserSync.reload);

});

gulp.task('default', function () {
});