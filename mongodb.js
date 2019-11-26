const  mongodb  = require('mongodb')
const mongoClient = mongodb.MongoClient;

const databaseName = "taskmanager";
const connectionURL = 'mongodb://127.0.0.1:27017'

mongoClient.connect( connectionURL, {useNewUrlParser : true,  useUnifiedTopology: true}, (error, client) => {
    if(error){
        console.log('unable to connect to database')
    } 
    
    const db = client.db(databaseName)
    db.collection('user').insertOne({
        name : 'ibrahim',
        age : 29
    })
})