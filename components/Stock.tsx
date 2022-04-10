import { Text, View, StyleSheet} from 'react-native';
import { useState, useEffect } from 'react';
import config from "../config/config.json";

function StockList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${config.base_url}/products?api_key=${config.api_key}`)
          .then(response => response.json())
          .then(result => setProducts(result.data));
      }, []);

    const list = products.map((product, index) => <Text style={styles.baseText} key={index}>{product.name} in stock: {product.stock}</Text>);

    return (
        <View>
            {list}
        </View>
  );
}

export default function Stock() {

    return (
        <View>
            <Text style={{color: '#333', fontSize: 24}}>Lagerförteckning</Text>
            <StockList/>
        </View>
      );
}

const styles = StyleSheet.create({
    
    baseText: {
      fontFamily:"Verdana",
      color:"black",
      fontSize: 14,
    }
  });