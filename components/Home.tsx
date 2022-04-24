import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './Stock';
import Warehouse from '../assets/warehouse.jpg'
import { header1 } from '../styles/typography';
import { base } from '../styles/base';
//const warehouse = '../assets/warehouse.jpg';
// visar lagersaldot lager vyn

export default function Home({products,setProducts}) {
    return (
      <ScrollView style={styles.base}> 
      <View style={styles.base}>
        <Text style={{color: 'darkolivegreen', fontSize: 42}}>ByggLagret</Text> 
        <Image source={Warehouse} style={{ width: 320, height: 200 }} />
        <Stock products={products} setProducts={setProducts}/>
        <StatusBar style="auto" />
      </View>
      </ScrollView>
  
    );
  }
  // fixa style med moduler

  const styles = StyleSheet.create({
    base: base,
    header: header1,
});
