// Modules

//CommonJs, every file is module by default
// Modules - Encapsulated Code (only share minimum)

// const secret = 'SUPER SECRET'
// const john = 'john'
// const peter = 'peter'    // moved to 4-names 

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }                                    // moved to 5-utils
// since dollar is used ` is used.

const names = require('./4-names')
const sayHi = require('./5-utils')
const stuffgen = require('./6-alternativeFlavour')
console.log(names);
console.log(stuffgen);
require('./7-mindGrenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)