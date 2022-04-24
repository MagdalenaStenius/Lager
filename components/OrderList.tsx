import { TabRouter } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Text, Button } from "react-native";
import config from "./../config/config.json";
import orderModel from "../models/orders";

// hämtar och skriv ut alla ordrar som går att packas märkta "new"
export default function OrderList({ navigation }) {
    const {reload} = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        reloadOrders();
    }
    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders())
    }

    useEffect(() => {
       reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
            />
        });

    return (
        <View>
            <Text>Ordrar redo att plockas</Text>
            {listOfOrders}
        </View>
    );
}