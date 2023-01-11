import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions";
import { styles } from "./styles";
import { CategoryItem } from "../../components";

const Categories = ({ navigation }) => {

    const dispatch = useDispatch();

    const categories = useSelector((state) => state.category.categories)

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate ('Products', { title: item.title})
        
    }

    const keyExtractor = (item) => item.id.toString();

    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={categories}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={styles.containerList}
            />
        </SafeAreaView>
    )
}

export default Categories;