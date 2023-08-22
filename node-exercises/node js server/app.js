const express = require('express');
const app = express();
const port = 3000;

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const users = [
    {
        id:'0',
        email:'test0@gmail.com',
        password: '123456'
    },
    {
        id:'1',
        email:'test1@gmail.com',
        password: '123456'
    },
    {
        id: "ec2e15cc-8929-4298-adb5-725c472fae5b",
        email: "test5@gmail.com",
        password: "$2b$10$FdgryGNF72kDlm3C2v7mquBSYQ9qqw6lNRzANGHEYOQ0h.j4Y.O5i"
    }
];

const checkId = (id) =>{
    for (let user = 0; user < users.length; user++) {
        if(users[user].id === id){
            return false;
        }
    }
    return true;
};


const checkUser = (email, password) =>{
    for (let user = 0; user < users.length; user++) {
        if(users[user].email === email){
            if(checkPassword(password, users[user].password)){
                return true;
            }
        }
    }
    return false;
};


const checkPassword = (text, hash) =>{
    return bcrypt.compareSync(text, hash);
};


const indexOfUser = (id) =>{
    for (let user = 0; user < users.length; user++) {
        if(users[user].id === id){
            return user;
        }
    }
    return false;
};


const cryptPass = (text) =>{
    const pass = bcrypt.hashSync(text, saltRounds);
    return pass;
};


app.use(express.json());

app.get('/get_users', (req, res) => {
    res.send(users);
    });


app.get('/get_user', (req, res) => {
    const id = req.body.id;
    const userIndex = indexOfUser(id);
    res.send(users[userIndex]);
    });


app.post('/signup_user', (req, res) => {
    const id = uuidv4();
    const email = req.body.email;
    const password = req.body.password;
    const encPassword = cryptPass(password);

    const user = {id, email, password:encPassword };
    users.push(user);
    res.send(`user has created!`)
});


app.post('/login_user', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (checkUser(email, password)){
        res.send(`User is connected`);
    }else{
        res.send(`wrond credentials`);
    }
});


app.put('/update_user', (req, res) => {
    const id = req.body.id;
    const userIndex = indexOfUser(id);

    const email = req.body.email;
    const password = req.body.password;

    users[userIndex].email = email;
    users[userIndex].password = cryptPass(password);

    res.send(`user update succsesfully!`);
});


app.delete('/delete_user', (req, res) =>{
    const id = req.body.id;
    const userIndex = indexOfUser(id);
    users.splice(userIndex, 1);
    res.send(`user: ${userIndex} has delete!`);
});


app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
})