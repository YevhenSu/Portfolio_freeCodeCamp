'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var usemin = require('gulp-usemin');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');

gulp.task('js', function(){
  gulp.src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('css', function(){
  gulp.src('src/css/*.css')
    .pipe(concat('styles.css'))
    .pipe(minify())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('imagemin', function(){
  var img_src = 'src/img/**/*',
      img_dest = 'build/img';
  gulp.src(img_src)
    .pipe(changed(img_dest))
    .pipe(imagemin())
    .pipe(gulp.dest(img_dest));
});

gulp.task('usemin', function() {
  return gulp.src('src/*.html ')
    .pipe(usemin({
      css: [ rev() ],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('default', ['js', 'css', 'imagemin', 'usemin'], function(){});

//to run with gulp command

//to add concated style.css and script.js by hand or find gulp prefixer for js and a
//auto insertion in html file
