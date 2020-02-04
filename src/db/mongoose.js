const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager-api', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
}).then(() => console.log('connected to Mongo DB')).catch((e) => console.log('Not connected to Mong DB'))

const task  = mongoose.model('task', {
    description : {
        type : String,
        trim : true,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

// const me  = new task({
//     description : 'Restore the app',
//     completed : true
// })

// me.save()
// .then(() => console.log(me))
// .catch((e) => console.log(e))



