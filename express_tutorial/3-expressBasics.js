const express = require('express');
// const app = require('express')(); // another way
const app = express();

app.get('/',(req,res)=>{
    console.log('user hit get request');
    res.status(200).send('Konichiwa')
    // res.end()  // not required for express
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
    // res.end()
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Page Not Found</h1>')

})

app.listen(5000,()=>{
    console.log("server listening at 5000");
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use // very usefull crusial Middleware
// app.listen
