const Register = require('../database/models/Register');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
module.exports = (req, res)=>{

    const { email, password } = req.body;

    Register.findOne({ email }, (error, user)=>{

        if(user){
           bcrypt.compare(password, user.password, (error, same)=>{
               if(same){
                req.session.userId = user._id;
                console.log(req.session.userId);

                jwt.sign({user}, 'secretkey', (error, token)=>{
                    res.json({token})
                    console.log(user)

               })
           }     else {
            return res.json({
              "error": "Wrong  password"
             
            });
            
        }
                
                
                })
        }

       else{
            return res.json({
                "error":" Wrong email"
            })


        }
                
            })
        }
