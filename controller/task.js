const catchAsync =  require('../utils/catchAsync')
const Task = require('../model/taskModel')
const AppError = require('../utils/appError');

exports.createTask =  catchAsync(async(req,res,next)=>{
//  console.log(req.body);

 if (!req.body) {
    return next(new AppError('Please provide body',404,'failed')); 
 }
 
 const task = await Task.create(req.body)

 res.status(200).json({
    data:{
     status: 'success',
     task
  } 
 }) 
})

exports.getAllTask = catchAsync(async(req,res,next)=>{
 
   const allTask = await Task.find({}).populate({
      path:'user',
      select:'name email'
   })
   res.status(200).json({
      data:{
       status: 'success',
       allTask
    } 
   })

})

exports.updateTask = catchAsync(async(req,res,next)=>{    
   const updateTask = await Task.findByIdAndUpdate(req.params.taskId,{taskName:req.body.taskName})
   res.status(200).json({
      data:{
       status: 'success'
    } 
   })

})




exports.deleteTask = catchAsync(async(req,res,next)=>{
   const deleteTask = await Task.findByIdAndDelete({_id:req.params.taskId})
   res.status(200).json({
      data:{
       status: 'success',
       deleteTask:[]
    } 
   })

})