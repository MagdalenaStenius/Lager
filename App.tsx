import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from './assets/warehouse.jpg';
import Stock from './components/Stock.tsx';

//  a740e413dcd0b782ad024ae4f23a952e api nyckel
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.base}>
      <Text style={{color: 'darkolivegreen', fontSize: 42}}>ByggLagret</Text>
      <Image source={warehouse} style={{ width: 320, height: 200 }} />
      <Stock/>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
  },
});
