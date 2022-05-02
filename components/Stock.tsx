import { Text, View,} from 'react-native';
import { useState, useEffect } from 'react';
import config from "../config/config.json";
import productModel from "../models/products";
import { normal, header2,baseText } from '../styles/typography';

//hämtar och visar lagersaldot
// skall uppdateras

 function StockList({products, setProducts}) {
  //console.log(products)

  useEffect(async () => {
    setProducts(await productModel.getAllProducts());
    }, []);
    //console.log("Object?", products)
    const list = products.map((product, index) => 
    { return <Text
              key={index}
              style={baseText}
              >
       {product.name} in stock: {product.stock}</Text>;
    });

    return (
        <View>
            {list}
        </View>
  );
};

export default function Stock({products, setProducts}) {

    return (
        <View>
            <Text style={header2}>Lagerförteckning:</Text> 
            <StockList products={products} setProducts={setProducts}/>
        </View>
      );
}
