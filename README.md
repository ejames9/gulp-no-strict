# gulp-no-strict
A simple bit of code for removing all instances of 'use strict' from a file in
a gulp stream.

### Installation
```
$ npm i -D gulp-no-strict
```
### Usage
```javascript
const lucyGoosy = require('gulp-no-strict')

gulp.task('default', ()=> {
        jsSrc  = './js/src/someFile.js'
        jsDst  = './js/assets/'
     return gulp.src(jsSrc)
       .pipe(lucyGoosy())
       .pipe(gulp.dest(jsDst))
  })
```

## Voilá!!!!
####It's the wild, wild west!
