const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager-api', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology : true
})

const task  = mongoose.model('task', {
    description : {
        type : String
    },
    completed : {
        type : Boolean
    }
})

const me  = new task({
    description : 'Built weather app',
    completed : false
})

me.save()
.then(() => console.log(me))
.catch((e) => console.log(e))