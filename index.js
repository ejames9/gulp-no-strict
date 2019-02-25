/*
gulp-elementsJS-interpreter,  gulp-plugin
v0.1.0

Author: Eric James Foster
License: MIT
*/

var Transform = require('stream').Transform,
           fs = require('fs'),
         util = require('util'),
          vfs = require('vinyl-fs'),
          log = require('elementsJS').log,
        gutil = require('gulp-util'),
     streamer = require('event-stream').through,
    lucyGoosy = require('./lib/lucyGoosy'),

  PluginError = gutil.PluginError;



const PLUGIN_NAME = 'gulp-no-strict';



//PLugin
function gulpNoStrict() {
  /*If the interpreter is not instantiated by having called the function with the "new" keyword, return
  a "new" instance of the class.*/
  if (!(this instanceof gulpNoStrict)) {
    return new gulpNoStrict();
  }
  //This is a trick that applies the internal properties of the Transform class to my interpreter class.
  Transform.call(this, {objectMode: true} );

  //Internal plugin function, does the actual transformation of files.
  this._stream =()=> {
    var s = streamer(function write(data) {
      data = lucyGoosy(data);
      this.emit('data', data);
    });
    return s;
  };

  /*Create stream for files to pass through.
  Define _transform method as required by node for Transform streams*/
  this._transform = (file, encoding, fin)=> {
    // console.dir(file);
    //If file is Vinyl object, continue to transformation.
    if (file) {
      //log('file is Vinyl', ['magentaBright', 'bold']);
      //If file is null, emit PluginError.
      if (file.isNull()) {
        this.emit('error', new PluginError(PLUGIN_NAME, 'File is Null'));
        fin();
      }
      //If file is buffer, transform it, and push it back to the stream.
      if (file.isBuffer()) {
        log('file is Buffer', ['cyanBright', 'bold']);


        //Transform file.contents, convert back to a buffer, and push it back to stream.
        this.file = file.contents;
        this.file = lucyGoosy(this.file);
        file.contents = new Buffer(this.file);
        log(file.contents, 'cyanBright');
      //If file is stream, pipe it through internal transform function.
      } else if (file.isStream()) {
        log('file is Stream', ['cyanBright', 'bold']);
        log(file.contents, 'cyanBright');

        //Define the transformation stream.
        this._transformStream = this._stream();

        //Catch errors from the stream and emit a gulp PluginError.
        this._transformStream.on('error', this.emit.bind(this, 'error'));
        //Transform the contents.
        file.contents = file.contents.pipe(this._transformStream);
        console.dir(file.contents);
      }
    //If file is neither buffer, stream or null Vinyl file object, emit error.
    } else {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Invalid File Type'));
      fin();
    }
    //Push file to next plugin.
    this.push(file);
    //Tell stream engine we are done with file.
    fin();
  };
}

//This will apply the internal "methods" of the Transform class to my plugin.
util.inherits(gulpNoStrict, Transform);



module.exports = gulpNoStrict;



vfs.src('./lib/test/IO/testFile.js', {buffer: false})
.pipe(gulpNoStrict())
.pipe(vfs.dest('./lib/test/IO/testFileOut.js'));
