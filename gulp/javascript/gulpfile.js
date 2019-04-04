const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

gulp.task('default', () =>{
    return gulp.src('src/**/*.js')
        .pipe(babel({
            // vai tirar o comentario
            comments : false,
            presets: ["env"]
        }))  
         .pipe(uglify())
         .on('error', function (err) { console.log(err)})
         // nome do arquivo a ser criado
         .pipe(concat('codigo.min.js'))
         // pasta de destino
         .pipe(gulp.dest('build'))
})