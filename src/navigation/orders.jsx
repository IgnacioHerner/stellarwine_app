import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders  } from '../screens';
import { COLORS } from "../constants/theme/colors";

const Stack = createNativeStackNavigator();
 
const OrderNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Orders"
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.primary
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
            name="Orders"
            component={Orders}
        />
        </Stack.Navigator>
    )
}

export default OrderNavigator