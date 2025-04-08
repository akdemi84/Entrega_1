import fs from 'fs';
import CartManager from './CartManager';

class ProductsManager{
    constructor(){
        this.path='./src/prrducts.json'
        
    }
    
     addProduct = async({pid, title, description, price, thumbnail, cid, stock})=>{
        const products = await this.getProducts();
        const newProduct = {
            pid: this.generateNewId(products),
            title,
            description,
            price,
            thumbnail,
            cid,
            stock
        }
        products.push(newProduct);
        await fs.promises.writeFile(this.path, JSON.stringify(products, null, 2), 'utf-8')
        return newProduct;

    }

    getProducts = async()=> {
        const productsJson = await fs.promises.readFile(this.path, 'utf-8')
        const products = JSON.parse(productsJson)
        return products
    }

    getProductsById = async(productId)=> {
        const productsJson = await fs.promises.readFile(this.path, 'utf-8')
        const products = JSON.parse(productsJson)
        const product = products.find((productData)=> productData.id === productId )
        return product
    }

    updateProductsById= async (pid, updatedData)=> {
        const productJson = await fs.promises.readFile(this.path, 'utf-8')
        const products = JSON.parse(productsJson)
        const index = products.findIndex(product => product.id === pid)
        products[index] = {...products[index], ...updatedData}
        await fs.promises.writeFile(this.path, JSON,stringify(products, null, 2), 'utf-8')
        return products
    }


}

export default ProductsManager;