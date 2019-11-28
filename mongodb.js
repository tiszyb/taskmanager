const  { MongoClient, ObjectID }  = require('mongodb')

const databaseName = "taskmanager";
const connectionURL = 'mongodb://127.0.0.1:27017'

MongoClient.connect( connectionURL, {useNewUrlParser : true,  useUnifiedTopology: true}, (error, client) => {
    if(error) return console.log('unable to connect to database') 


    const db = client.db(databaseName)

    // db.collection('users').deleteOne({
    //     age : 99,
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age : 19,
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateMany({
    //     name : new ObjectID("5ddd2bc4d2f8ac4bf002515a")
    // }, {
    //     $set : {
    //         name : 'ibrahim'
    //     },
    //     $inc : {
    //         age : 2
    //     }
    // }).then((Response)=>{
    //     console.log(Response)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    
    // const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id : new ObjectID("5ddd2bc4d2f8ac4bf002515a") 
    // }, {
    //     $set : {
    //         name : 'Tope'
    //     }
    // }).then((Response)=>{
    //     console.log(Response)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    
    // db.collection('users').findOne({ name : 'ibrahim'}, (error, user) =>{
    //     if(error) return console.log('user not found')

    //     console.log(user)
    // })

    // db.collection('tasks').find({ completed : true }).toArray((error, task) =>{
    //     if(error) return console.log('user not found')  

    //     console.log(task)
    // })
    
    // db.collection('tasks').insertMany([
    //     {
    //         description : 'clean the house',
    //         completed : true
    //     },
    //     {
    //         description : 'Sweep the room',
    //         completed : true
    //     },
    //     {
    //         description : 'wash the car',
    //         completed : false
    //     }
    // ], (error, result) => {
    //     if(error) return console.log('Could not insert into db')

    //     console.log(result.ops)
    // })
})