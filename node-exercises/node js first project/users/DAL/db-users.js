const fs = require('fs');
const pathL = require('path');
const path = pathL.join(__dirname, '..', '/DAL/DB/users.json');

exports.addUser = (user) => {
    const allUsers = this.getAllUsers();
    allUsers.push(user);
    fs.writeFileSync(path, JSON.stringify(allUsers));
}

exports.getUserByEmail= (email) => {
    const allUsers = this.getAllUsers();
    for (let user = 0; user < allUsers.length; user++) {
        if(allUsers[user].email === email){
            return allUsers[user];
        }
    }
    return false;
}

exports.getUserById = (id) => {
    const allUsers = this.getAllUsers();
    for (let user = 0; user < allUsers.length; user++) {
        if(allUsers[user].id === id){
            return allUsers[user];
        }
    }
    return false;
}


exports.getUserIndex = (id) => {
    const allUsers = this.getAllUsers();
    for (let userIndex = 0; userIndex < allUsers.length; userIndex++) {
        if(allUsers[userIndex].id === id) return userIndex;
    }
    return false;
}


exports.updateUsers = (users) => {
    fs.writeFileSync(path, JSON.stringify(users));
}


exports.deleteUser = (id) => {
    const allUsers = this.getAllUsers();
    const userIndex = this.getUserIndex(id);
    const deleteUser = allUsers[userIndex];
    allUsers.splice(userIndex, 1);
    this.updateUsers(allUsers);
    return deleteUser;
}


exports.getAllUsers = () =>{
    const data = fs.readFileSync(path);
    const arr_data = JSON.parse(data);
    return arr_data;
};