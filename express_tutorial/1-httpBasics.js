const http = require('http')
const {readFileSync} = require('fs')


// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(req.method);
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }else if (url === '/htmlcode'){
        res.writeHead(200,{'content-type':'text/plain'})
        res.write(homePage)
        res.end()
    }else if (url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 - page not found</h1>')
        res.end()
    }




    // res.writeHead(200,{'content-type':'text/html'})
    // res.writeHead(200,{'content-type':'text/plain'}) // setting up the header genearally set up by express
    // res.write('<h1>HOME PAGE</h1>')
    // res.end()
})

server.listen(5000)
//port -communication endpoint