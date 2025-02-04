const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

test('debería agregar un producto', () => {
    const product = addProduct("Laptop", 1000);
    expect(product).toEqual({ id: 0, name: "Laptop", price: 1000 });
    expect(getProducts()).toHaveLength(1);
});

test('debería incrementar el id en 1 cada vez que se añada un producto', () => {
    addProduct("Mouse", 50);
    const product = addProduct("Teclado", 80);
    expect(product.id).toBe(1);
});

test('debería lanzar un error si el nombre o el precio no están definidos', () => {
    expect(() => addProduct("", 100)).toThrow("El nombre y el precio son obligatorios");
    expect(() => addProduct("Tablet")).toThrow("El nombre y el precio son obligatorios");
});

test('debería lanzar un error si el producto ya existe', () => {
    addProduct("Monitor", 200);
    expect(() => addProduct("Monitor", 200)).toThrow("El producto ya existe");
});

test('debería eliminar un producto', () => {
    const product = addProduct("Auriculares", 150);
    removeProduct(product.id);
    expect(getProducts()).toHaveLength(0);
});

test('debería lanzar un error si el producto no existe', () => {
    expect(() => removeProduct(99)).toThrow("El producto no existe");
});

test('debería devolver un producto por su id', () => {
    const product = addProduct("Cámara", 500);
    expect(getProduct(product.id)).toEqual(product);
});

test('debería lanzar un error si el producto no existe', () => {
    expect(() => getProduct(99)).toThrow("El producto no existe");
});

test('debería actualizar un producto por su id', () => {
    const product = addProduct("Altavoz", 300);
    updateProduct(product.id, "Altavoz Bluetooth", 350);
    expect(getProduct(product.id)).toEqual({ id: 0, name: "Altavoz Bluetooth", price: 350 });
});

test('debería lanzar un error si el producto no existe al actualizar', () => {
    expect(() => updateProduct(99, "Nuevo", 200)).toThrow("El producto no existe");
});