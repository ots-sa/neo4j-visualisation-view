var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

var libs = {
  styled: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/lodash/dist/lodash.js',
    'bower_components/d3/d3.js',
    'bower_components/alchemyjs/dist/alchemy.js'
  ]
};

var sources = {
  files: [
    'js/*.js'
  ]
};

var dest = {
  js: 'build'
};

gulp.task('bundle', function() {
  return gulp.src(sources.files)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(dest.js));
});

gulp.task('vendor', function() {
  return gulp.src(libs.styled)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dest.js))
    .pipe(connect.reload());
});

gulp.task('connect', ['vendor', 'bundle'], function() {
  var app = connect.server({
    port: 8888,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js', '*.html'], ['bundle']);
});

gulp.task('default', [
  'vendor',
  'bundle',
  'watch',
  'connect'
]);
