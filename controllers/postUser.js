const jwt = require('jsonwebtoken');

module.exports =  (req, res) => {
   
        const token = req.token ;
    jwt.verify(token,'secretkey', (error, user)=>{
        if(error){
            res.json({error});
   
        }
        else{
            res.json({
                message: "Post Created",
                 user
                
            })
            
        }
    })
}
