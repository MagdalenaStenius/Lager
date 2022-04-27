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
    
    //anropas när knappen plocka order visas
    pickOrder: async function pickOrder(order:Partial<Order>) {
        //console.log("strul",order.order_items)
        await Promise.all(order.order_items.map(async (order_item: // här verkar felet
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

    changeOrder: async function changOrder(order){
            let newOrderStatus = {
            id: order.id,
            name: order.name,
            api_key: config.api_key,
            status_id: 200,
            };
            await orders.upDateOrder(newOrderStatus)     
    },

    upDateOrder: async function upDateOrder(order:Partial<Order>) {
        console.log("inne")
        console.log(order)
      
        try {
            await fetch(`${config.base_url}/orders?api_key=${config.api_key}`, {
                body: JSON.stringify(order),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            })
            .then(function(response){

            });
        } catch (error) {
        console.log("could not update order")
    }
        
    },
};


export default orders;