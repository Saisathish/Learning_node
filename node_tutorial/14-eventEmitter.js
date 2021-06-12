const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on - listen for an event
// emit - emit an event

customEmitter.on('response',(name,id)=>{
    console.log(`data received ${name} ${id}`)
})
// can have how many ever .on() functions
customEmitter.on('response',()=>{
    console.log(`some other stuff `)
})


// order matters -  first .on() and then .emit()
customEmitter.emit('response','jogn',24)  // same string given for .on()
// will not show
customEmitter.on('response',()=>{
    console.log(`some other stuff after emit`)
})
