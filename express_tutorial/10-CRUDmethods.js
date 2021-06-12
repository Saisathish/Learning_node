const express = require('express')
const app = express()
let {people} = require('./data')

// statc assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false})) //similar to body parser, will place in req.body
//parse JSON
app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

// using HTML Form POST
app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please provide name')
})

// Using Javascript form code post
app.post('/api/people',(req,res)=>{
    const {name}= req.body;
    if(!name){
        res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(400).json({success:false,msg:'please provide name value'})
    }
    // res.status(201).json({success:true,person:name})
    res.status(201).json({success:true,data:[...people,name]}) // "...people" will return all the people object along with name included inside
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person)=>{
        return person.id === Number(id)
    })
    if(!person){
        res.status(404).json({success:false,msg:`no person wit the id ${id}`})
    }

    const newPerson = people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name;
        }
        return person
    })
    res.status(200).json({success:true,data:newPerson})
})

app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>{
        return person.id === Number(id)
    })
    if(!person){
        res.status(404).json({success:false,msg:`no person wit the id ${id}`})
    }
    const newPeople = people.filter((person)=>person.id != Number(id))
    return res.status(200).json({success:true,data:newPeople})
})


app.listen(5000,()=>{
    console.log('Server listening at port 5000...');
})