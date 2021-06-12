const express = require('express');
const path = require('path')

const app = express();

// setup static and middleware
// app.use(express.static('./public'))
// app.use(express.static(path.resolve(__dirname,'./public')))
app.use(express.static(path.resolve(__dirname,'./navbar-app')))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
//two ways
// adding index to static assests
// server side renderng using template engine

app.all('*',(req,res)=>{
    res.status(404).send('Resources Not Found')
})

app.listen(5000,()=>{
    console.log("server listening at port 5000...");
})
