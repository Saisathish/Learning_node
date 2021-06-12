const express = require('express')
const logger = require('./logger')
const app = express()
const morgan = require('morgan')
const authorize = require('./authorize')

// req => middleware => res

//1. use vs route
//2. options - our own / express / third party - middlewares
// famous logger - MORGAN - thirparty middleware

// app.use([logger,authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/product',(req,res)=>{
    console.log(req.user);
    res.send('Products')
})
// app.get('/api/items',[logger,authorize],(req,res)=>{
//     res.send('Items')
// })

app.listen(5000,()=>{
    console.log('Server listening at port 5000...');
})