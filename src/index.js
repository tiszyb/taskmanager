const express = require('express')
require('./db/mongoose.js')
const users = require('./models/user.js')
const tasks = require('./models/task.js')

const app = express()
const port = process.env.PORT || 3000 

app.use(express.json())

app.post('/users', (req, res) =>{
    const user = new users(req.body)
    user.save()
    .then(() => console.log(user))
    .catch((e) => res.status(400).send(e))
    
})

app.get('/users', (req, res) =>{
    users.find({})
    .then((user) => res.status(200).send(user))
    .catch((e) => res.status(400).send(e))
})

app.get('/users/:id', (req, res) =>{
    const _id = req.params.id
    users.findById(_id)
    .then((user) => {
        if(!user) return res.status(400).send()
        res.status(200).send(user)
    })
    .catch((e) => res.status(404).send(e))
})

app.post('/tasks', (req, res) =>{
    const task = new tasks(req.body)

    task.save()
    .then(() => res.status(200).send(task))
    .catch((e) => res.status(400).send(task))

    
})

app.get('/tasks', (req, res) =>{
    tasks.find({})
    .then((task) => res.status(200).send(task))
    .catch((e) => res.status(400).send(e))    
})

app.get('/tasks/:id', (req, res) =>{
    const _id = req.params.id
    tasks.findById(_id)
    .then((task) => {
        if(!task) return res.status(404).send()
        res.status(200).send(task)
    })
    .catch((e) => res.status(500).send(e))    
})

app.listen( port , ()=> {
    console.log('App is listening on port '+ port)
})