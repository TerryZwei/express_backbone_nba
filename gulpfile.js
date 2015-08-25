var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var mocha = require('gulp-mocha');

//copy the file to static dir
gulp.task('movejs', function(){
  return gulp.src(['bower_components/backbone/backbone-min.js','bower_components/jquery/dist/jquery.min.js','bower_components/requirejs/require.js','bower_components/underscore/underscore-min.js'])
            .pipe(gulp.dest('static/javascripts/libs/'));
});
/*gulp.task('scripts', function(){
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
});*/

/*gulp.task('default',function(){
    gulp.watch('static/javascripts/*.js',['scripts','jshint']);
    gulp.watch('static/stylesheets/**',['less']);
});*/
