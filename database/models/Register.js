const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const RegisterSchema = new mongoose.Schema({
first_name:{
    type: String,
    require: true,
},
last_name:{
    type: String,
    require: true,
},
username:{
    type: String,
    require: true,
    unique:true
},
email:{
    type: String,
    require: true,
    unique:true
},
password:{
    type: String,
    require: true,
   
}
})

RegisterSchema.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password,10, function(error, encrypted){
        user.password = encrypted
        next()
    })
})
module.exports =  mongoose.model('Register', RegisterSchema);