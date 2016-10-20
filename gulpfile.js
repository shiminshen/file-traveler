var gulp            = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins         = gulpLoadPlugins();
var del             = require('del');
var run             = require('gulp-run')

gulp.task('compile', ['clean'], () => {
  return gulp.src('./src/**/*.js')
  .pipe(plugins.plumber())
  .pipe(plugins.babel({
    presets: ['es2015', 'stage-0']
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('execute', () => {
  return run('node ./dist').exec();
})

gulp.task('clean', () => {
  return del([
    './dist'
  ]);
});

gulp.task('watch', ['compile'], () => {
  gulp.watch('./src/**/*.js', ['compile']);
  gulp.watch('./dist/**/*.js', ['execute']);
});
