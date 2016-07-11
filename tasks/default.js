module.exports = function (gulp, plugins, config) {
    gulp.task('default', function() {
        gulp.start('html');
        gulp.start('css');
        gulp.start('js');
        gulp.start('watch');
        gulp.start('server');
    });
};