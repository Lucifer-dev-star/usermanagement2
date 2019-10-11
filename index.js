const express = require('express');
const mongoose = require('mongoose');
const app = new express();
const bodyParser = require('body-parser');
const expressSession =  require('express-session');
const jwt = require('jsonwebtoken');

const registerUserController = require('./controllers/registerUser');
const loginUserController = require('./controllers/loginUser');
const postController = require('./controllers/postUser');
const verifyToken = require('./controllers/verifyUser');
const logoutUserController = require('./controllers/logoutUser')
const updatePasswordController = require('./controllers/updatePassword')
const usersController = require('./controllers/users')
const deleteUsersController = require('./controllers/deleteUsers')
const updateUsersController = require('./controllers/updateUsers')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressSession({
    secret: 'secret'
}))


//APIs
app.post('/register', registerUserController);
app.get('/login', loginUserController);
app.post('/post', verifyToken, postController);
app.get('/userId', (req, res)=>{
    console.log(req.session.userId)
    res.end();
})
app.get('/logout', logoutUserController);
app.put('/fpassword', updatePasswordController);
app.get('/users', usersController);
app.delete('/users/delete', deleteUsersController);
app.put('/users/update', updateUsersController);




mongoose.connect('mongodb://localhost/user_management',  { useNewUrlParser: true })

app.listen(9000, ()=>{
    console.log('You are listening to port 9000')
})
