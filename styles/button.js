//import * as Base from './base';
//import * as Typography from './typography';

//export { Base, Typography };
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingLeft: 12,
      paddingRight: 12,
      borderRadius: 30,
      elevation: 3,
      backgroundColor:'darkolivegreen',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });