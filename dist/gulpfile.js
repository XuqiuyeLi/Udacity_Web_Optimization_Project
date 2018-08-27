var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
 
gulp.task('pack-js', function () {	
	return gulp.src('js/perfmatters.js')
		.pipe(minify({
			ext:{
				min:'.js'
			},
			noSource: true
		}))
		.pipe(gulp.dest('js'));
});

gulp.task('pack-main-js', function () {	
	return gulp.src('views/js/main.js')
		.pipe(minify({
			ext:{
				min:'.js'
			},
			noSource: true
		}))
		.pipe(gulp.dest('views/js'));
});
 
gulp.task('pack-css', function () {	
	return gulp.src(['css/style.css', 'css/print.css'])
		.pipe(cleanCss())
   		.pipe(gulp.dest('css'));
});

gulp.task('pack-views-css', function () {	
	return gulp.src('views/css/*.css')
		.pipe(cleanCss())
   		.pipe(gulp.dest('views/css'));
});
 
gulp.task('default', ['pack-js','pack-main-js', 'pack-css','pack-views-css']);