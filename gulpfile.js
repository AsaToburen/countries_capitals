var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');


gulp.task('copy-html-files', function() {
  gulp.src(['./app/**/*.html', '!./app/index.html'], {base: './app'})
    .pipe(gulp.dest('build/'));
});


gulp.task('imagemin', function () {
    return gulp.src('./app/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('build/'));
});

// add image-min 

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      vendor: [ rev() ],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('compile-sass', function () {
    return sass('./app/css/cc-app.scss')
        // Convert sass into css
        .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
  gulp.watch('app/css/*.scss', ['compile-sass']);
});


gulp.task('connect', function() {
  connect.server({
    root: 'app/'
  });
});

// Default Task
gulp.task('default', ['watch', 'compile-sass', 'connect']);
gulp.task('build', ['copy-html-files', 'imagemin', 'usemin']);
