import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './Stock';
import Warehouse from '../assets/warehouse.jpg'
import { header1,font1,styleImage } from '../styles/typography';
import { base } from '../styles/base';
//const warehouse = '../assets/warehouse.jpg';
// visar lagersaldot lager vyn skall uppdateras när order är packad

export default function Home({products,setProducts}) {
    return (
      <ScrollView style={styles.base}> 
      <View style={styles.base}>
        <Text style={styles.font}>ByggLagret</Text> 
        <Image source={Warehouse} style={styles.image} />
        <Stock products={products} setProducts={setProducts}/>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
  
    );
  }
  
  const styles = StyleSheet.create({
    base: base,
    header: header1,
    font: font1,
    image: styleImage,
});
