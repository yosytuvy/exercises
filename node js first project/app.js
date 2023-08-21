const express = require("express");
const app = express();
const router = require("./router/router");
const morgan = require("./loggers/morgan_logger");
const axios = require('axios');
const fs = require('fs');

const PORT = 3000;


const setData = async () =>{
    await axios.get('https://fakestoreapi.com/products')
        .then(response => {
            const data = response.data;
            data.forEach(product => {
                let randomNum = Math.floor(Math.random() * 200) + 1;
                product.quantity = randomNum;
            });
            fs.writeFileSync('./products/DAL/DB/products.json', JSON.stringify(data));
        });
};


// setData();

app.use(morgan);
app.use(express.json());
app.use(express.text());
app.use("/api", router);



app.listen(PORT, (err) => {
    if (err) return console.log(`The server is not connecting Error: ${err}`);
    console.log(`Server is running on port ${PORT}`);
});
