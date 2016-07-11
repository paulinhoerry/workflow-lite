module.exports = function (gulp, plugins, config) {
    // Watch Task
    gulp.task('watch', function () {
        //Builds CSS
        plugins.watch(config.sourceCss, function () {
            gulp.start('css');
        });

        // Build Pug
        plugins.watch(config.sourceHtml, function () {
            gulp.start('html');
        });

        // Build JS
        plugins.watch(config.sourceHtml, function () {
            gulp.start('js');
        });
    });
};