const express = require('express')
const logger = require('./logger')
const app = express()
const authorize = require('./authorize')

// app.use(logger) // instead of adding middleware to each route we can use 'use' of express.Orde matters.only routes after the 'use' will have the middleware
// app.use('/api',logger) // only ones contaning the specified base route will use this middleware

app.use([logger,authorize]) // using multiple middleware
// app.use([authorize,logger]) // order matters

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
// app.use(logger) //  above ones will not be logged in this case
app.get('/api/product',(req,res)=>{
    console.log(req.user);
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})

app.listen(5000,()=>{
    console.log('Server listening at port 5000...');
})