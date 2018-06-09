var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var del = require("del");
var runSequence = require("run-sequence");

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
});

gulp.task("start", ["browserSync"], function() {
  gulp.watch("app/**/*.html", browserSync.reload);
  gulp.watch("app/**/*.css", browserSync.reload);
  gulp.watch("app/**/*.js", browserSync.reload);
});

gulp.task("useref", function() {
  return gulp
    .src("src/index.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("dist"));
});

gulp.task("build", function(callback) {
  runSequence("clean:dist", ["useref"], callback);
});

gulp.task("clean:dist", function() {
  return del.sync("dist");
});
