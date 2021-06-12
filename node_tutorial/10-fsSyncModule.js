// const fs = require('fs');
// fs.readFileSync()

//destructuring the module
// above same as below
const {readFileSync, writeFileSync} = require('fs');
console.log('Start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second} `)  // overwrites any content

writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second} `, {flag :'a'})  // will append to the content already existing

console.log('Done with the task');
console.log('Starting with next one');

// these are syncronous and hence if it tae lot of time then next process will only execute after them


