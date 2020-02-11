const express = require('express')
const users = require('../models/user')
const router = new express.Router()


router.post('/users', async (req, res) =>{
    const user = new users(req.body)

    try{
        await user.save()
        res.status(200).send(user)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/users', async (req, res) =>{
    try{
       const user = await users.find({})
       res.status(200).send(user)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/users/:id', async (req, res) =>{
    const _id = req.params.id

    try{
        const user = await users.findById(_id)
        if(!user) return res.status(400).send()
        res.status(200).send(user)
     } catch(e){
         res.status(404).send(e)
     }

})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'age', 'password']
    const isValidOperation =  updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        res.status(400).send('error : invalid updates!!!')
    }

    try{
        const user = await users.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators : true})
        if(!user){
            return res.status(400).send()
        }
        res.send(user)
    } catch(e){
        res.status(500).send()
    }    

})

router.delete('/users/:id', async (req, res) => {
    try{
        const user  = await users.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch(e){
        res.status(500).send()
    }
})

module.exports = router