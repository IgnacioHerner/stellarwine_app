import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Product, Products } from '../screens'
import { COLORS } from "../constants/theme/colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
            <Stack.Navigator 
                initialRouteName="Categories"
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
                    name='Categories'  
                    component={Categories}
                    options= {{
                        title: 'StellarWine'
                    }} 
                />
                <Stack.Screen 
                    name='Product' 
                    component={Product} 
                    options={({route}) => ({
                        title: route.params.title,
                    })}
                />
                <Stack.Screen 
                    name='Products' 
                    component={Products}
                    options={({route}) => ({
                        title: route.params.title,
                    })}
                />
            </Stack.Navigator>
    )
}

export default ShopNavigator;