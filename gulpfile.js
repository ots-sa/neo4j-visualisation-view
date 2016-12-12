var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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

var destinations = {
  js: 'build'
};

gulp.task('build', function() {
  return gulp.src(sources.files)
    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(destinations.js));
});

gulp.task('vendor', function() {
  return gulp.src(libs.styled)
    .pipe(uglify())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(destinations.js))
    .pipe(connect.reload());
});

gulp.task('connect', ['build'], function() {
  var app = connect.server({
    port: 8888,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js']);
});

gulp.task('default', [
  'vendor',
  'build',
  'connect'
]);
