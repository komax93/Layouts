'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
 
// Basic usage 
gulp.task('scripts', function() {
	// Single entry point to browserify 
	gulp.src('sass/js/app.js')
		.pipe(gulp.dest('app/js/'))
});

gulp.task('watch', function() {
  gulp.watch('sass/js/*.js', ['scripts']);
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('sass/main.scss')
  	.pipe(sourcemaps.init())
  	.pipe(sass())
  	.pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'));
});
 

gulp.task('default', ['scripts', 'sass', 'watch']);
