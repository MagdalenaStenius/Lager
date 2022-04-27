import config from "../config/config.json";
import order_item from "../interfaces/order_item"

const products = {
    // hämtar en produkt
    getProduct: async function getProduct(order_item:Partial<order_item>): Promise<order_item[]> {
        const response = await fetch(`${config.base_url}/products/:${order_item.product_id}?api_key=${config.api_key}`);
        const result = await response.json();
        return result.data;
    },

    // hämtar alla produkter
    getAllProducts: async function getAllProducts() {
        const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
        const result = await response.json();
        return result.data;

    },
    //uppdaterar produkt den här fungerar! 
    upDateProduct: async function updateProduct(order_item:Partial<order_item>) {
        try {
            //console.log("här", order_item)
           // product.api_key = config.api_key;
            await fetch(`${config.base_url}/products?api_key=${config.api_key}`,{
                body:JSON.stringify(order_item),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            }); 

        } catch (error) {
            console.log("could not update product");
        }
    },
    
};

export default products
