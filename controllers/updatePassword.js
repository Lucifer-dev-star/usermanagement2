const Register = require('../database/models/Register');

module.exports = (req, res)=>{

    //  const password =  req.body;
    const newPassword = req.body.password

     Register.updateOne({_id: req.body._id}, {
         $set : {
             password: newPassword
         }
        }, (error, update)=>{
         if(error){

                return res.json({
                    "message": "please enter a valid id"
                })
               
          }

        if(update.n === 1 && update.nModified === 1){
            return res.json(req.body);
         } else{
            return res.json({
                    "message": "cannot update same password"
                 
                 })
        }
         
     })

     
}