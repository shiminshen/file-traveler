var gulp    = require('gulp');
var babel   = require('gulp-babel');
var nodemon = require('gulp-nodemon');


gulp.task('compile', () => {
  return gulp.src('./src/*.js')
  .pipe(babel({
    presets: ['es2015', 'stage-0']
  }))
  .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  // gulp.watch('./src#<{(|.js', ['babel']);
  return nodemon({
    script: './dist/',
    watch: './src/',
    tasks: ['compile']
  });
});
