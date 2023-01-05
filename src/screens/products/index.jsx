import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../constants/theme/colors";

const Products = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products</Text>
            <Button 
                title="Go to products"
                color={COLORS.primary}
                onPress={() => navigation.navigate('Product')}
            />
        </View>
    )
}

export default Products;