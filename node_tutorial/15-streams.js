// STREAMS

//writeable
//Readable
//Duplex
//Transform

//streams extend events and streams inside man module

//when reading a file if file too large cannot store the content so use readfile stream

// Creating a big file to use
// const { writeFileSync } = require('fs')
// for (let i = 0; i < 10000; i++) {
//   writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
// }

const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt','utf8')
// see output it divides the files and reads in chunks
//by default the chunks size is 65536 bytes
// const stream = createReadStream('./content/big.txt',{highWaterMark:9000})  //customizing the chunk size
const stream = createReadStream('../content/big.txt',{encoding:'utf8'})

stream.on('data',(result)=>{
    console.log(result.length);
})
// keyword "data","error" all present in node events document

stream.on('error',(error)=>{
    console.log(error);
})