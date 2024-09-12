/*
Tutorial how to setup gulp: https://medium.com/swlh/setting-up-gulp-4-0-2-for-bootstrap-sass-and-browsersync-7917f5f5d2c5
*/

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
	return gulp.src('./app/scss/**/*.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream());
}
function watch() {
	browserSync.init({
		server: {
			baseDir: "./app",
			index: "/index.html"
		}
	});
	gulp.watch('./app/scss/**/*.scss', style);
	gulp.watch('./app/**/*.html').on('change',browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;

