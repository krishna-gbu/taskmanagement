const catchAsync =  require('../utils/catchAsync')
const User = require('../model/userModel')
const AppError = require('../utils/appError');

exports.createUser =  catchAsync(async(req,res,next)=>{
 if (!req.body) {
    return next(new AppError('Please provide body',404,'failed')); 
}
 
 const user = await User.create(req.body)
 res.status(200).json({
    data:{
     status: 'success',
     user
  } 
 }) 
})

exports.getAllUser = catchAsync(async(req,res,next)=>{
   const user = await User.find({})  
   res.status(200).json({
      data:{
       status: 'success',
       user
    } 
   })   
})