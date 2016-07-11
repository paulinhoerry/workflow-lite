module.exports = function(gulp, plugins, config) {
  plugins.browserSync = require('browser-sync');

  gulp.task('server', function() {
    var files = [
      config.build
    ];
    plugins.browserSync.init(files, {
      server: {
        baseDir: './_build/'
     }
    });

    gulp.watch(config.sourceHtml, ['html']);
    gulp.watch(config.sourceCss, ['css']);
    gulp.watch(config.sourceImg, ['images']);
    gulp.watch(config.sourceIcons, ['icons']);

  });
};