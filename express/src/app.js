import express, { json } from "express";
import CartManager from "./CartManager";
import ProductManager from "./ProductManager";

const app = express();
app.use(express.json());

const  cartManager = new CartManager();
const productManager = new ProductManager();

app.get('/api/products', async(req, res)=> {
    const products = await productManager.getProducts(productId);
    res.status(200).json({products: products, message: "lista de productos"});

});

app.get('/api/products/:pid', async(req, res)=> {
    const productId = req.params.pid;
    const products = await productManager.getProductsById(productId)
    res.status(200).json({products: products, message: "lista de productos por id"})
});

app.post('/api/products', async(req, res)=> {
    const newProduct = req.body;
    await productManager.addProduct(pid, title, description, price, thumbnail, cid, stock)
    res.status(200),json({carts, message: "Nuevo producto agregado"})

});

app.put('/api/products/:pid', async(req, res)=>{
 const productId = req.params.pid;
 const updatedData = req.body; 
 const products = await productManager.updateProductsById(pid, updatedData)
 res.status(200).json({products: products, message: "Producto actualizado"})

});

app.post('/api/carts', async(req, res)=>{
    const carts = await cartManager.addCart();
    res.status(201).json({ carts, message: "Nuevo carrito creado" });
});

 app.get('/api/carts/:cid', async(req, res)=>{
    const cid = req.params.cid;
    const products = await cartManager.getProductsInCartById(cid);
    res.status(200).json({ products, message: "Lista de productos" });
});

app.post('/api/carts/:cid/product/:pid', async(req, res)=>{
    const cid = req.params.cid;
    const pid = parseInt(req.params.pid);
    const quantity = req.body.quantity;
    const carts = await cartManager.addProductInCart(cid, pid, quantity);
    res.status(200).json({ carts, message: "Nuevo producto añadido" });
});




app.listen(8080, ()=> {
    console.log('Servidor iniciado en el puerto 8080');
  });
