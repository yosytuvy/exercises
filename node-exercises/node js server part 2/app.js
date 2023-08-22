const express = require("express");
const app = express();
const port = 3000;

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const jsonfile = require("jsonfile");

const userFile = "./users.json";
const productsFile = "./products.json";

// const users = [
//     {
//         id: "0",
//         email: "test0@gmail.com",
//         password: "123456",
//     },
//     {
//         id: "1",
//         email: "test1@gmail.com",
//         password: "123456",
//     },
//     {
//         id: "ec2e15cc-8929-4298-adb5-725c472fae5b",
//         email: "test5@gmail.com",
//         password:
//             "$2b$10$FdgryGNF72kDlm3C2v7mquBSYQ9qqw6lNRzANGHEYOQ0h.j4Y.O5i",
//     },
// ];

const checkId = async (id) => {
    const users = await getUsers();
    for (let user = 0; user < users.length; user++) {
        if (users[user].id === id) {
            return false;
        }
    }
    return true;
};

const checkUser = async (email, password) => {
    const users = await getUsers();
    for (let user = 0; user < users.length; user++) {
        if (users[user].email === email) {
            if (checkPassword(password, users[user].password)) {
                return true;
            }
        }
    }
    return false;
};

const checkPassword = (text, hash) => {
    return bcrypt.compareSync(text, hash);
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    if (password.length < 8) return false;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    return regex.test(password);
};

const cryptPass = (text) => {
    const pass = bcrypt.hashSync(text, saltRounds);
    return pass;
};

const getUsers = async () => {
    return new Promise((resolve, reject) => {
        jsonfile.readFile(userFile, (err, obj) => {
            if (err) reject(err);
            resolve(obj);
        });
    });
};

const getProducts = async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error("Request failed!");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const indexOfUser = async (id) => {
    const users = await getUsers();
    for (let user = 0; user < users.length; user++) {
        if (users[user].id === id) {
            return user;
        }
    }
    return false;
};

app.use(express.json());

app.get("/test", async (req, res) => {
    const obj = { name: "JP" };

    jsonfile.writeFile(userFile, obj, { flag: "a" }, function (err) {
        if (err) console.error(err);
    });
});

app.get("/get_users", async (req, res) => {
    const users = await getUsers();
    res.send(users);
});

app.get("/get_user", async (req, res) => {
    const id = req.body.id;
    const userIndex = await indexOfUser(id);
    const users = await getUsers();
    res.send(users[userIndex]);
});

app.post("/signup_user", async (req, res) => {
    const id = uuidv4();
    const email = req.body.email;
    const password = req.body.password;

    if (!validateEmail(email)) {
        res.send(`Invalid email address`);
        return;
    }

    if (!validatePassword(password)) {
        res.send(
            `password must contain at least one upperCase, one lowerCase, and at least lenght of 8`
        );
        return;
    }

    const encPassword = cryptPass(password);

    const user = { id, email, password: encPassword };
    const users = await getUsers();
    users.push(user);

    jsonfile.writeFile(userFile, users, (err) => {
        if (err) res.send(err);
        res.send(`user has created!`);
    });
});

app.post("/login_user", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (await checkUser(email, password)) {
        res.send(`User is connected`);
    } else {
        res.send(`wrond credentials`);
    }
});

app.put("/update_user", async (req, res) => {
    const id = req.body.id;
    const userIndex = await indexOfUser(id);

    const email = req.body.email;
    const password = req.body.password;

    if (!validateEmail(email)) {
        res.send(`Invalid email address`);
        return;
    }

    if (!validatePassword(password)) {
        res.send(
            `password must contain at least one upperCase, one lowerCase, and at least lenght of 8`
        );
        return;
    }

    const users = await getUsers();
    users[userIndex].email = email;
    users[userIndex].password = cryptPass(password);

    jsonfile.writeFile(userFile, users, (err) => {
        if (err) res.send(err);
        res.send(`user update succsesfully!`);
    });
});

app.delete("/delete_user", async (req, res) => {
    const id = req.body.id;
    const userIndex = await indexOfUser(id);

    const users = await getUsers();
    users.splice(userIndex, 1);
    jsonfile.writeFile(userFile, users, (err) => {
        if (err) res.send(err);
        res.send(`user delete succsesfully!`);
    });
});

app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
});

///////////////////////////////////////////////
// E:8
const workWithExternalServer = async () => {
    const users = await getUsers();
    const user = users[0];

    const products = await getProducts();
    const product = products.products[0];

    user.product = product;
    
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => console.log(data))
};

// workWithExternalServer();
