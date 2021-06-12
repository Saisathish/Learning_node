const express = require('express')
const app = express()

// req=> middleware => res

//here logger acts as a middleware and express automatically assigns res,req,next from the route call
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear()
    console.log(method,url,time);
    // res.send('Testing')  // need to either pass on to 'next' middleware or terminate the response cycle
    next()
}

app.get('/',logger,(req,res)=>{
    res.send('Home')
})
app.get('/about',logger,(req,res)=>{
    res.send('About')
})

app.listen(5000,()=>{
    console.log('Server listening at port 5000...');
})