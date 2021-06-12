// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

// output will be:
// first 
// third
// second

// since async even if timer=0 the callbaks are put to execute later on --gets offloaded
