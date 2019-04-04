const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () =>{
    return tsProject.src()
    // aqui converte o codigo tsSCript em javaScript
       .pipe(tsProject())
       // destino do prjeto
       .pipe(gulp.dest('build'))
})
