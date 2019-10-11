const Register = require('../database/models/Register');


module.exports = (req, res)=>{

    const users = req.body;

        Register.findByIdAndDelete(users, {users},(error, update)=>{
            if(update){
              return  res.redirect('/users')
                console.log(users)
            }else{
                return res.json({"error":"Please enter a valid ID"})
            }

        })
}