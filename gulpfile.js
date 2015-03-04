var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var sass = require('gulp-ruby-sass');

gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify(), rev()],
      js0: [uglify(), rev()],
      js1: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('compile-sass', function () {
    return sass('./app/cc-app.scss')
        // Convert sass into css
        .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
  gulp.watch('app/*.scss', ['compile-sass']);
});


gulp.task('connect', function() {
  connect.server({
    root: 'app/'
  });
});

// Default Task
gulp.task('default', ['watch', 'compile-sass', 'connect']);
gulp.task('build', ['copy-html-files', 'usemin']);
