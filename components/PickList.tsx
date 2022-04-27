import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
import products from "../models/products";
import productModel from "../models/products";
import OrderList from "./OrderList";

//Hämtar och visar order och order_items


export default function PickList({ route, navigation, setProducts }) {
    const { order } = route.params;
    const [productsList, setProductsList] = useState([])
    

    
    
    useEffect(async () => {
    setProductsList(await productModel.getAllProducts());
    }, []);

    async function pick() {
        //console.log({check})
        if (checkStock(order)==true){await orderModel.pickOrder(order);
            await orderModel.changeOrder(order);
            //console.log(productModel.getProduct(order.order_items))
            setProducts(await productModel.getAllProducts())
            //setOrderList(await orderModel.upDateOrder({status_id: 200}))   
            navigation.navigate("List", {reload: true});
        }       
    };

    
    function checkStock(order){
        
        console.log("ordern:", order.order_items[0].amount)
        console.log("lagret:", order.order_items[0].stock)
        console.log("ordern:",order.order_items)
        const checkStock = order.order_items.map((item) => {
            if (item.stock >= item.amount) {
                return true
            } else return false;
        
        });
        
        if (checkStock.includes(false)) {return false}
        else {return true};
        
    };

// visar antal produkter i orden och var det finns i lagret. 
    const orderItemsList = order.order_items.map((item, index) => {
        return <Text
                key={index}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    function pressButton (route,navigation){
        //console.log(order)
        //console.log(checkStock(order))
        if(checkStock(order)==true){
            return <Button title="Plocka order" onPress={pick} />
        }else{
            return <Text> Out of stock</Text>
        }
    };

    

    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.address}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text>Produkter:</Text>

            {orderItemsList}
            {pressButton(route,navigation,)}
            
        </View>
    )
};
