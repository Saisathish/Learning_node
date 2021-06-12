const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')


// output will be :
// started a first task
// starting next task
// completed first task

// snce it is async the callbak ate kept last until the operations rtuns the result or error