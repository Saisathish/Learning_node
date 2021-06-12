const path = require('path')

console.log(path.sep)
const filepath = path.join('/content','subFolder','text.txt')
// removes any extera / s
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subFolder','text.txt');

console.log(absolute);