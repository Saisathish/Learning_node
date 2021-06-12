const http = require('http');

    //req-incoming request all details he sent
    //res - the response what we send user back
    // console.log(req);
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to homepage');
    }
    else if(req.url === '/about'){
        res.end('Welcome to short description');
    }
    else{
        res.end(`<h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p>
        <a href="/">Back Home</a> `);
    }
});

server.listen(5000);

    // res.write('Welcome to our homePage');
    // res.end()