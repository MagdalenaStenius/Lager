import config from "../config/config.json";
import Order from "../interfaces/order"
import OrderItem from "../interfaces/order_item"
import products from "./products";
//hämtar från databas
//Vi har nu möjlighet för att på ett enkelt sätt hämta alla ordrar med hjälp av 
//anropet const orders = await orderModel.getOrders(); 
//eller await orderModel.pickOrder() i de filer där vi har importerat modellen.

const orders = {
    // hämtar alla ordrar
    getOrders: async function getOrders(): Promise<Order[]> {
        const response = await fetch(`${config.base_url}/orders?api_key=${config.api_key}`);
        const result = await response.json();

        return result.data;
    },
    pickOrder: async function pickOrder(order:Partial<Order>) {
        await Promise.all(order.order_items.map(async (order_item:
            Partial<OrderItem>) => {
                let changedProduct = {
                    id: order_item.product_id,
                    name: order_item.name,
                    stock: order_item.stock - order_item.amount,
                    api_key: config.api_key,
                };
                await products.upDateProduct(changedProduct);
            }));
    },


    upDateOrder: async function upDateOrder(order:Partial<Order>) {
        try {
            await fetch(`${config.base_url}/orders?api_key=${config.api_key}`, {
                body: JSON.stringify(order),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            });
        } catch (error) {
        console.log("could not update order")
    }
        
    },
};




        // TODO: Minska lagersaldo för de
        // orderrader som finns i ordern

        // TODO: Ändra status för ordern till packad



export default orders;