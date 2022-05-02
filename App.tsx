import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home";
import Pick from "./components/Pick";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//  a740e413dcd0b782ad024ae4f23a952e api nyckel

const Tab = createBottomTabNavigator();

export default function App() {
  const [products, setProducts] = useState([]); // lifting state up
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
      let iconName = routeIcons[route.name] || "alert";

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'limegreen',
    tabBarInactiveTintColor: 'darkolivegreen',
  })}
>
    <Tab.Screen name="Lager"> 
      {()=> <Home products ={products} setProducts={setProducts} // skickar med stata ner i trädet
    ></Home>}
    </Tab.Screen>

    <Tab.Screen name="Plock">
      {()=> <Pick products ={products} setProducts={setProducts}
      ></Pick>}
      </Tab.Screen>
      </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const routeIcons = {
  "Lager": "home-sharp",
  "Plock": "add",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
