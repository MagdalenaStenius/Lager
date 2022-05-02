import { TabRouter } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Text, Button,StyleSheet } from "react-native";
import config from "./../config/config.json";
import orderModel from "../models/orders";
import { header2,font1,header3,button } from '../styles/typography';
import { base } from '../styles/base';

// hämtar och skriv ut alla ordrar som går att packas märkta "new"
export default function OrderList({ route, navigation }) {
    const {reload} = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        reloadOrders();
    }
    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());// fel här?? 
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
                color = "green"
                onPress={() => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
            />
        });

    return (
        <View>
            <Text style={styles.header}>  Ordrar redo att plockas:</Text>
            {listOfOrders}
        </View>
    );
    
}
const styles = StyleSheet.create({
    base: base,
    header: header3,
    font: font1,
    button: button,
});