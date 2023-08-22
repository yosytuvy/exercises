const fs = require('fs');
const pathL = require('path');
const path = pathL.join(__dirname, '..', '/DAL/DB/products.json');


exports.findAllProducts = () => {
    const products = getData(path);
    return products;
};


exports.findProduct = (id) => {
    const products = getData(path);
    const product = products.filter((product) => product.id === id);
    return product;
}


exports.addProduct = (product) => {
    const products = getData(path);
    products.push(product);
    fs.writeFileSync(path, JSON.stringify(products));
}


exports.updateProduct = (id, product) => {
    const products = getData(path);
    const index = products.findIndex(p => p.id === id);
    products[index] = product;
    fs.writeFileSync(path, JSON.stringify(products));
}


exports.deleteProduct = (id) => {
    const products = getData(path);
    const index = products.findIndex(p => p.id === id);
    const delete_product = products.splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(products));
    return delete_product;
}

exports.updateQuantity = (id, operator) => {
    const products = getData(path);
    const index = products.findIndex(p => p.id === id);
    if(operator === 'plus'){
        products[index].quantity ++;
    }else if(operator === 'minus'){
        products[index].quantity --;
    }
    fs.writeFileSync(path, JSON.stringify(products));
    return products[index];
}



const getData = (path) =>{
    const data = fs.readFileSync(path);
    const arr_data = JSON.parse(data);
    return arr_data;
};
