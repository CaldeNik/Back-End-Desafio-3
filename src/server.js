import express from "express";
import ProductManager from "./classes/ProductManager.js";

const app = express();
const productManager = new ProductManager();

app.get('/products', async (req, res) => {
    const limit = req.query.limit;
  
    const products = await productManager.findProduct(limit);
    res.send(products);
  });
  
app.get('/product/:id', async (req, res) => {
    const id = req.params.id;
  
    const product = await productManager.findProductById(id);
    res.send(product);
  });  

app.listen(8080, () => {console.log('Server ON')});
