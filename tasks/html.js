module.exports = function(gulp, plugins, config) {

  plugins.browserSync = require('browser-sync').create();
  var reload = plugins.browserSync.reload;
  var pug = require('gulp-pug');

  gulp.task('html', function() {
    gulp.src(config.sourceHtml)
      .pipe(plugins.plumber())
      .pipe(pug())
      .pipe(gulp.dest(config.buildHtml))
      .pipe(reload({stream: true}));
  });

};