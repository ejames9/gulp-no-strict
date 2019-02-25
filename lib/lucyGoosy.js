/*
** lucyGoosy.js
**
** A simple bit of code for removing "use strict" from a file in a gulp stream.
**
** Eric James Foster, MIT License.
** * * * * * * * * * * * * * * * * * * */


const fs = require('fs')

// Regular Expression for finding instances of 'use strict'..
const useStrictRE =()=> /\"use\ strict\"/g
//
const testFile    = './test/IO/testFile.js'


// The main function. Finds and replaces all instances of 'use strict' within
// a given file with nothing, ''..
const lucyGoosy =(file)=> {
// Convert file to string...
  let fileString = file.toString(),
  instances,
  instance,
  temp

// Remove all instances of 'use strict' from file...
  do {
    instances = useStrictRE().exec(fileString)
    instance  = instances[0]
// Replace instance with '', nothing..
    temp = fileString.replace(instance, '')
    fileString = temp

  } while (useStrictRE().test(fileString))


// Kick the file back out to the string...
  return fileString
}

module.exports = lucyGoosy

//
// fs.readFile(testFile, (err, doc)=> {
//   if (err) {
//     throw err
//   } else {
//     lucyGoosy(doc)
//   }
// })
