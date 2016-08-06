module.exports = function(gulp, plugins, config) {
  var poststylus   = require('poststylus');
  var lost         = require('lost');
  var rupture      = require('rupture');
  var rucksack     = require('rucksack-css');
  var fontMagician = require('postcss-font-magician');

  gulp.task('css', function() {
    gulp.src(config.sourceStyl)
      .pipe(plugins.plumber({
        errorHandler: plugins.notify.onError("ERROR: CSS Compilation Failed")
      }))
      .pipe(plugins.stylus({
        use: [rupture(), poststylus([lost(), fontMagician(), rucksack({ autoprefixer: true })])],
        compress: false
      }))
      .pipe(plugins.rename('style.css'))
      .pipe(plugins.cssnano())
      .pipe(gulp.dest(config.buildCss));
  });
};