import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import CartNavigator from "./cart";
import OrderNavigator from './orders'
import CameraNavigator from "./camera";
import { COLORS } from "../constants/theme/colors";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {

    const cart = useSelector((state) => state.cart.items)

    return (
        <BottomTab.Navigator 
            initialRouteName="ShopTab" 
            screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'OpenSans-Regular',
                fontSize: 12,
            },
            tabBarActiveTintColor: COLORS.text,
            tabBarInactiveTintColor: COLORS.text,
            tabBarStyle: {
                backgroundColor: COLORS.primary,
                paddingBottom: 10,
                height: 60,
            }
        }}>

            <BottomTab.Screen name='ShopTab'component={ShopNavigator}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={COLORS.white}
                        />
                    ),
                }}
            />
            <BottomTab.Screen name="CartTab" component={CartNavigator}
                options={{
                    title: 'Carrito',
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={22}
                            color={COLORS.white}
                        />
                    ),
                    tabBarBadge: cart.length === 0 ? null : cart.length,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.white,
                        color: COLORS.primary,
                        fontFamily: 'OpenSans-Bold',
                        fontSize: 11,
                    }
                }}
            />
            <BottomTab.Screen name="OrderTab" component={OrderNavigator}
                options={{
                    title: 'Ordenes',
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? 'file-tray' : 'file-tray-outline'}
                            size={22}
                            color={COLORS.white}
                        />
                    )
                }}
            />
            <BottomTab.Screen name="CameraTab" component={CameraNavigator}
                options={{
                    title: 'Camara',
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            name={focused ? 'camera' : 'camera-outline'}
                            size={22}
                            color={COLORS.white}
                        />
                    )
                }}
            />

        </BottomTab.Navigator>
    )
}

    

export default Tabs;