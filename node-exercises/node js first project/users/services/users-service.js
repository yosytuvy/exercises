const dbConnection = require("../DAL/db-users");
const bcrypt = require("bcrypt");

exports.validateLogin = (email, password) => {
    const allUsers = dbConnection.getAllUsers();
    const result = allUsers.filter((user) =>{
        if(user.email === email) {
            if(bcrypt.compareSync(password, user.password)){
                return true;
            }
        }
    });
    if(result.length === 1) {
        return true;
    }
    return false;
};


exports.addUser = (user) => {
    const allUsers = dbConnection.getAllUsers();
    const lastId = allUsers[allUsers.length-1].id;
    const cryptPassword = bcrypt.hashSync(user.password, 10);
    user.id = lastId + 1;
    user.password = cryptPassword;
    user.isAdmin = false;
    dbConnection.addUser(user);
}


exports.updateUser = (id, user) => {
    const allUsers = dbConnection.getAllUsers();
    const userIndex = dbConnection.getUserIndex(id);
    allUsers[userIndex].password = user.password;
    allUsers[userIndex].email = user.email;
    dbConnection.updateUsers(allUsers);
}


exports.validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


exports.validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}