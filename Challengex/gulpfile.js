
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var react=require('gulp-react');
var React=require('react');
var ReactDOM=require('react-dom');
var concat = require('gulp-concat');
var babelify = require('babelify');
var less=require("gulp-less");
var util = require('gulp-util');
var jquery = require('gulp-jquery');
var Router = require('react-router');

gulp.task('browserify', function() {
    return browserify('./js/route.js', {
      paths:['./js'],
      transform: [reactify]
    })
    .bundle()
    .pipe(source('route.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('jquery', function () {
    return jquery.src({
        release: 2,
        flags: ['-deprecated', '-event/alias', '-ajax/script', '-ajax/jsonp', '-exports/global']
    })
    .pipe(gulp.dest('./public/vendor/'));
});

gulp.task('less', function () {
  gulp.src('./less/main.less')
    .pipe(less().on('error', util.log))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch',function(){
  gulp.watch('./js/**/*.js',['browserify']);
  gulp.watch('./less/**/*.less',['less']);
});

gulp.task('default', ['watch']);
