const Register = require('../database/models/Register');



module.exports = (req, res)=>{
    const { first_name, last_name, username } = req.body;

    Register.findByIdAndUpdate(req.body ,{
      first_name:  req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username
    },(error, update)=>{
        if(update){
           return res.json(req.body)
        }else{
            return res.json({"message":"could not update"}, error)
        }
    })

}