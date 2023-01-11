import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from '../screens';
import { COLORS } from "../constants/theme/colors";

const Stack = createNativeStackNavigator();
 
const CartNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.tabs
            },
            headerTintColor: COLORS.text,
            headerTitleStyle: {
                fontFamily: 'OpenSans-Bold',
                fontSize: 18,
                
            },
            headerTitleAlign: 'center',
        }}
        > 
        <Stack.Screen
            name="Cart"
            component={Cart}
        />
        </Stack.Navigator>
    )
}

export default CartNavigator