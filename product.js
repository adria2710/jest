let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error("El nombre y el precio son obligatorios");
    }
    if (products.some(product => product.name === name)) {
        throw new Error("El producto ya existe");
    }
    const newProduct = { id: id++, name, price };
    products.push(newProduct);
    return newProduct;
}

function removeProduct(productId) {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error("El producto no existe");
    }
    products.splice(index, 1);
}

function getProducts() {
    return products;
}

function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error("El producto no existe");
    }
    return product;
}

function updateProduct(productId, name, price) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error("El producto no existe");
    }
    if (name) product.name = name;
    if (price !== undefined) product.price = price;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
