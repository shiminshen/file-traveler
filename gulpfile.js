var gulp            = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins         = gulpLoadPlugins();
var del             = require('del');

gulp.task('compile', ['clean'], () => {
  return gulp.src('./src/**/*.js')
  .pipe(plugins.plumber())
  .pipe(plugins.babel({
    presets: ['es2015', 'stage-0']
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  return del([
    './dist'
  ]);
});

gulp.task('watch', ['compile'], () => {
  // gulp.watch('./src#<{(|.js', ['compile']);
  return plugins.nodemon({
    script: './dist/',
    watch: './src/',
    tasks: ['compile']
  });
});
