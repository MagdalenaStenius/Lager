import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderList from './OrderList';
import PickList from './PickList';
// visar alla ordrar redo att packas 



const Stack = createNativeStackNavigator();


export default function Pick(props) {
    return (
        <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List" component={OrderList} />
            <Stack.Screen name="Details">
                {() => <PickList {...props}></PickList>}
            </Stack.Screen> 
        </Stack.Navigator>
    );
}