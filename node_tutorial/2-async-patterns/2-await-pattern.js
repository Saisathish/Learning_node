const {readFile, writeFile} = require('fs').promises

const start = async ()=>{
    try {
        const first = await readFile('./content/first.txt','utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile('./content/result-mind-granade.txt',`THIS IS AWESOME ${first} aAND ${second}`,{flag:'a'})
        console.log(first, second);
    } catch (error) {
        console.log(error); 
    }
}
start()
// ----------------------------------------------------------------------------
// const {readFile, writeFile} = require('fs');

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async ()=>{
//     try {
//         const first = await readFilePromise('./content/first.txt','utf8')
//         const second = await readFilePromise('./content/second.txt','utf8')
//         await writeFilePromise('./content/result-mind-granade.txt',`THIS IS AWSOME ${first} aAND ${second}`)
//         console.log(first, second);
//     } catch (error) {
//         console.log(error); 
//     }
// }
// start()

// ------------------------------------------------------------

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }

// const start = async ()=>{
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second);
//     } catch (error) {
//         console.log(error); 
//     }
// }
// start()

// ----------------------------------------------------------------


// getText('./content/first.txt').then((result)=> console.log(result)).catch((err)=>console.log(err))
// only using promises only if need to call another file then again need to continuosly chain the then and catch


// readFile('./content/first.txt','utf8',(err,data)=>{
//     if(err){
//         return;
//     }
//     else{
//         console.log(data);
//         // issue if need to read two files then will be call back inside callbacks
//     }
// })