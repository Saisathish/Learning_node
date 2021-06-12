const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=> {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            console.log('done with this file');
        })
    })
})
console.log('starting with next one');

//Asyncronour each have diferent threads so will execute seperately
//so 'starting with next one' will execule much earlier since internal ones still executing
// problem with above is there is callback inside call back making difficult to understand called callback hell -- we can use "Promises", or " async await"

