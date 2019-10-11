const Register = require('../database/models/Register')

module.exports = (req, res)=>{

    Register.find({}, (error, data)=>{
            if(data){
               return res.json(data)
            }
    });
}