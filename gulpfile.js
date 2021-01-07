const { src, dest } = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
function styles() {
	return src('app/**/*.scss')
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(concat('style.min.css'))
		.pipe(dest('app/css'))
}
exports.styles = styles;