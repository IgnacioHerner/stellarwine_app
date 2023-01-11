import React from "react";
import { View, Text, FlatList } from "react-native";
import { OrderItem } from "../../components";
import { ORDERS } from "../../constants/data";
import { styles } from "../cart/styles";

const Orders = ({navigation}) => {

    const onDelete = (id) => {
        console.warn('delete', id)
    }

    const keyExtractor = (item) => item.id.toString();

    const renderItem = ({ item }) => (
        <OrderItem item={item} onDelete={onDelete} />
    ) 

    return (
        <View style={styles.container}>
            <FlatList 
                data={ORDERS}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Orders;