const mongoose = require('mongoose')


const userSchem =  new mongoose.Schema({
    taskName: String,
    user: {
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }
})

const Task =  mongoose.model('Task',userSchem)
module.exports = Task