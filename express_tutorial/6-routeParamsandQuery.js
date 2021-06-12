const express = require('express')
const {products,people} = require('./data.js')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct = products.map((item)=>{
        const {id,name,image} = item;
        return {id,name,image};
    })
    res.json(newProduct)
})
// using Route Parameters
app.get('/api/products/:productId',(req,res)=>{
    // console.log(req);
    // console.log(req.params); // params always a string
    const {productId} = req.params;
    const singleProduct = products.find((product)=> product.id === Number(productId))

    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewid',(req,res)=>{
    console.log(req.params)
    res.send('Hello World')
})


// URL query
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit}=req.query
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // res.status(200).send('no products matched your search')  // for this since already here we are sending response the next response statment confuses express , so on using retun that issue is fixed
        return res.status(200).json({sucess:true,data:[]})  // generally used 
    }
    res.status(200).json(sortedProducts)
    // res.send('Hello World')

})
//normally query is not setup seperately but its inside the route ones only



app.listen(5000,()=>{
    console.log('Server is listening on Port 5000');
})