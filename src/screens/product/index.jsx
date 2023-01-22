import React from "react";
import { View, Text, Image, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../../constants/theme/colors";
import { addToCart } from "../../store/actions";
import { styles } from "./styles";

const Product = ({navigation}) => {

    const dispatch = useDispatch();

    const product = useSelector((state) => state.products.selected);


    const onAddToCart = () => {
        dispatch(addToCart(product))
    }
    const { title, price, description, image} = product || {};
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image source={{ uri:image }} style={{width: 300, height:400, marginTop: 20 }}/>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.btnContainer}>
                <Button 
                    title= 'Agregar al carrito'
                    onPress={onAddToCart}
                    color={COLORS.primary}
                />  
            </View>
        </View>
    )
}

export default Product;