const express  = require('express')
const mongoose = require('mongoose')
const globalErrorHandler = require('./controller/errorController')
const userRouter = require('./route/userRoute')
const taskRouter = require('./route/taskRoute')
require('dotenv').config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGODB_CONNECTION,()=>
console.log('mongodb connected')
)


app.use('/api/user',userRouter)
app.use('/api/task',taskRouter)


app.use(globalErrorHandler)


const port =  process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`running on ${port}`)
})
// MVfivADgO2F26i2Q
// jacor56919@nuesond.com
//Qwert@12345