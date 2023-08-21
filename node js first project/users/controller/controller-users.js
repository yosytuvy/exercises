const service = require('../services/users-service');
const dbConnection =require('../DAL/db-users');

exports.loginUser = (req, res) => {
    const {email, password} = req.body;
    if(service.validateLogin(email, password)){
        res.status(200).send('user connected');
    }else{
        res.status(400).send('wrong cradentials');
    }
}

exports.signupUser = (req, res) => {
    const {email, password} = req.body;

    if(dbConnection.getUserByEmail(email)){
        res.status(400).send('User already exist!');
        return;
    }

    if(!service.validateEmail(email)){
        res.status(400).send('Email not valid');
        return;
    }

    if(!service.validatePassword(password)){
        res.status(400).send('\
        password must contain at least one upper case \
        leeter and one lower case and in length of least 8');
        return;
    }
    service.addUser({email, password,});
    res.status(200).send('user signup succesfully!!');
    return;
}


exports.getAllUsers = (req, res) => {
    const allUsers = dbConnection.getAllUsers();
    res.status(200).send(allUsers);
}


exports.getUser = (req, res) => {
    const userId = Number(req.params.id);
    const user = dbConnection.getUserById(userId);
    res.status(200).send(user);
}


exports.updateUser = (req, res) => {
    const toUpdateId  = Number(req.params.id);
    const details = req.body.update;
    service.updateUser(toUpdateId, details);
    res.status(200).send(details);
}


exports.deleteUser = (req, res) => {
    const toDeleteId = Number(req.params.id);
    const deleteUser = dbConnection.deleteUser(toDeleteId);
    res.status(200).send(deleteUser);
}



// Middlewares
/////////////////////////////////////////////////

exports.isAdminMiddleware = (req, res, next) =>{
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    if(!service.validateLogin(userEmail, userPassword)){
        res.status(400).send('wrong credential');
        return;
    }

    const user = dbConnection.getUserByEmail(userEmail);
    if(user){
        if(user.isAdmin){
            next();
        }else{
            res.status(403).send('Not authorized');
        }
    }else{
        res.status(401).send('user not found');
    }
};

exports.isAdminOrAouthMiddleware = (req, res, next) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    if(!service.validateLogin(userEmail, userPassword)){
        res.status(400).send('wrong credential');
        return;
    }

    const user = dbConnection.getUserByEmail(userEmail);
    if(user){
        if(user.isAdmin){
            next();
        }else{
            if(Number(req.params.id) === user.id){
                next();
            }else{
                res.status(403).send('Not authorized');
            }
        }
    }else{
        res.status(401).send('user not found');
    }
}


exports.isAuthMiddleware = (req, res, next) => {
    const userEmail = req.body.user.email;
    const userPassword = req.body.user.password;

    if(!service.validateLogin(userEmail, userPassword)){
        res.status(400).send('wrong credential');
        return;
    }

    const toUpdateId = Number(req.params.id);
    const user = dbConnection.getUserByEmail(userEmail);
    if(user){
        if(toUpdateId === user.id){
            next();
        }else{
            res.status(403).send('Not authorized');
        }
    }else{
        res.status(401).send('user not found');
    }
}


