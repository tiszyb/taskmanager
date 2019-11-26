const  mongodb  = require('mongodb')
const mongoClient = mongodb.MongoClient;

const databaseName = "taskmanager";
const connectionURL = 'mongodb://127.0.0.1:27017'

mongoClient.connect( connectionURL, {useNewUrlParser : true,  useUnifiedTopology: true}, (error, client) => {
    if(error){
        console.log('unable to connect to database')
    } 
    
    const db = client.db(databaseName)
    db.collection('tasks').insertMany([
        {
            description : 'clean the house',
            completed : true
        },
        {
            description : 'Sweep the room',
            completed : true
        },
        {
            description : 'wash the car',
            completed : false
        }
    ], (error, result) => {
        if(error) return console.log('Could not insert into db')

        console.log(result.ops)
    })
})