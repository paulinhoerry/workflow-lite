module.exports = function(gulp, plugins, config) {
  gulp.task('images', function() {
    gulp.src(config.sourceImg)
      .pipe(plugins.imagemin({
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }))
      .pipe(gulp.dest(config.buildImg));
  });
};