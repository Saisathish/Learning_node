const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')


// statc assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false})) //similar to body parser, will place in req.body
//parse JSON
app.use(express.json())
app.use('/login', auth)
app.use('/api/people', people)


app.listen(5000,()=>{
    console.log('Server listening at port 5000...');
})