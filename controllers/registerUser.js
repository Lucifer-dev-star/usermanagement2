const Register =  require('../database/models/Register')
const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({

})
module.exports = (req, res)=>{
    var user = req.body
    
 Register.create(user, (error, register)=>{

     if(register){
        res.redirect('/users');
        console.log(user);
     }
   
     else{
         res.json({"error":"Username/email already taken"})
        console.log(error);
     }
     
    })
}