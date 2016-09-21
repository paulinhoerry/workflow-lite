module.exports = function(gulp, plugins, config) {
  var cheerio     = require('gulp-cheerio');
  var svgmin      = require('gulp-svgmin');
  var svgstore    = require('gulp-svgstore');

  gulp.task('icons', () => {
    gulp.src(config.sourceIcons)
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true }))
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('hide');
        $('[fill]').removeAttr('fill');
      },

      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest(config.buildSvg));
  });

  gulp.task('svg', () => {
    gulp.src(config.sourceSvg)
    .pipe(svgmin())
    .pipe(gulp.dest(config.buildSvg));
  });
};


