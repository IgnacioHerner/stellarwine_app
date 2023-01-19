import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Camera } from '../screens';
import { COLORS } from "../constants/theme/colors";

const Stack = createNativeStackNavigator();
 
const CameraNavigator = () => {
    return(
        <Stack.Navigator 
        initialRouteName="Camera"
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
            name="Camera"
            component={Camera}
        />
        </Stack.Navigator>
    )
}

export default CameraNavigator