const mongoose = require('mongoose')
const valid = require('validator')
const bcrypt = require('bcrypt')

const userSchem =  new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique:true,
        required:[true,'Please provide email address'],
        lowercase:true,
        validate:[valid.isEmail ,'Please provide valid email id']
    },
    password:{
       type:String,
       required:[true,'Please Provide password'],
       minlength:8,
       select:false
    },
    passwordConfirm:{
        type:String,
        required:[true,'Please Provide password'],
        validate:{
            validator:function(value){
                return value === this.password
            },
            message:'Password not match'
            
        },
      
    }
})


userSchem.pre('save',async function(next){

if (!this.isModified('password')) return next()
this.password = await bcrypt.hash(this.password,12)
this.passwordConfirm = undefined
next()    
})


const User =  mongoose.model('User',userSchem)

module.exports = User