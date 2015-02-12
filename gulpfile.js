/*jshint node:true*/
var jshint = require('gulp-jshint');
var gulp = require('gulp');
var gif = require('gulp-if');
var notify = require('gulp-notify');

var paths = {
  js: ['./**/*.js', '!./node_modules/**']
};

var isCI = function() {
  return process.env.CI;
};

var notifyJsHint = function(file) {
  if (file.jshint.success) {
    // Don't show something if success
    return false;
  }

  var errors = file.jshint.results.map(function(data) {
    if (data.error) {
      return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
    }
  }).join('\n');
  return file.relative.split('/').pop() + ' (' + file.jshint.results.length + ' errors)\n' + errors;
};

gulp.task('default', ['jslint']); // `gulp` from cli
gulp.task('test', ['jslint']); // `gulp test` from cli
gulp.task('watch', function() {
  gulp.watch(paths.js, ['jslint']);
});

gulp.task('jslint', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gif(isCI, jshint.reporter('fail')))
    .pipe(notify(notifyJsHint));
});
