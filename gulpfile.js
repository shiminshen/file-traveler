var gulp  = require('gulp');
var babel = require('gulp-babel');


gulp.task('babel', () => {
  return gulp.src('./src/*.js')
  .pipe(babel({
    presets: ['es2015', 'stage-0']
  }))
  .pipe(gulp.dest('dist'));
});
