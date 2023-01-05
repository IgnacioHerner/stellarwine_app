import React from "react";
import { View, Text, Button, FlatList, SafeAreaView } from "react-native";
import { CATEGORIES } from '../../constants/data/index'
import { styles } from "./styles";
import { COLORS} from "../../constants/theme/colors";
import { CategoryItem } from "../../components";

const Categories = ({ navigation }) => {

    const onSelected = (item) => {
        console.warn('onSelected', item)
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected}/>
    
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    )
}

export default Categories;