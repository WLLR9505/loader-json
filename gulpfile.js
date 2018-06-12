var gulp = require('gulp');
var sass = require('gulp-sass');
//origem do .sass
var scssFiles = './src/sass/style.scss';

//destino do .css
var cssDest = './css';

var sassDevOptions = {outputStyle: 'expanded'};

gulp.task('default', [ '.sass2css', 'watch' ]);

gulp.task('.sass2css', function () {
    return gulp.src(scssFiles).pipe(sass(sassDevOptions).on('error', sass.logError)).pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(scssFiles, [ '.sass2css' ]);
});
