var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var mocha = require('gulp-mocha');

gulp.task('scripts', function(){
    return gulp.src(['static/javascripts/*.js'])
           .pipe(uglify())
           .pipe(gulp.dest('build/js'));
});

gulp.task('jshint', function(){
    return gulp.src(['static/javascripts/nba.js'])
           .pipe(jshint())
           .pipe(jshint.reporter('default'));
});

gulp.task('less',function(){
    return gulp.src(['static/stylesheets/common/common.less'])
           .pipe(less())
           .pipe(minifyCSS())
           .pipe(gulp.dest('build/css'));
});

gulp.task('mocha', function(){
    return gulp.src(['test/*_test.js'],{read: false})
           .pipe(mocha({
                 reporter: 'spec'
           }));
});

gulp.task('default',function(){
    gulp.watch('static/javascripts/*.js',['scripts','jshint']);
    gulp.watch('static/stylesheets/**',['less']);
});
