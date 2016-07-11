module.exports = function (gulp, plugins, config) {
  gulp.task('js', function() {
    gulp.src(config.sourceJs)
    .pipe(plugins.plumber({
      errorHandler: plugins.notify.onError("ERROR: JS Compilation Failed")
    }))
    .pipe(plugins.concat('script.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(config.buildJs));
  });
};