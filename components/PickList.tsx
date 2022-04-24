import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
import productModel from "../models/products";

//Hämtar och visar order och order_items


export default function PickList({ route, navigation, setProducts }) {
    const { order } = route.params;
    //const [productList, setProductlist] = useState([])

    useEffect(async () => {
    setProducts(await productModel.getProduct(order.order_items));
    }, []);

    async function pick() {
        await orderModel.pickOrder(order);
        navigation.navigate("List", {reload: true});
    }
    async function checkStock(){
        const product = await productModel.getProduct(order.order_items)
        if (product.stock >= order.order_items.amount){
           return <Button title="Plocka order" onPress={pick} />
            
        } else {
            return <Text> Out of stock</Text>
        }
    }; 

    const orderItemsList = order.order_items.map((item, index) => {
        return <Text
                key={index}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.address}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text>Produkter:</Text>

            {orderItemsList}
            {checkStock()}

            
        </View>
    )
};
// funktion som hämtar hem orderstatus för given produkt kolla att saldot är ok 
//<Button title="Plocka order" onPress={pick} />
// kolla om hämta produkt funkar först! 



