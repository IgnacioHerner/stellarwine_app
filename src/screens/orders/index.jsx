import React, {useCallback}  from "react";
import { useFocusEffect } from '@react-navigation/native'
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, deleteOrder } from "../../store/actions";
import { OrderItem } from "../../components";;
import { styles } from "../cart/styles";

const Orders = ({navigation}) => {

    const dispatch = useDispatch();

    const orders = useSelector((state) => state.orders.list)

    const onDelete = (id) => {
        dispatch(deleteOrder(id));
    }

    useFocusEffect(
        useCallback(() => {
          dispatch(getOrders());
        }, [dispatch])
      );

    const keyExtractor = (item) => item.id.toString();

    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} /> 

    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>
    )
}

export default Orders;