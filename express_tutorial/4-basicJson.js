const express = require('express')
const {products,people} = require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    // res.status(200).json([{'Name':'Sai','Age':22},{'Name':'Rajesh','Age':54}]);
    res.json(products)
})

app.listen(5000,()=>{
    console.log('Server is listening on Port 5000');
})