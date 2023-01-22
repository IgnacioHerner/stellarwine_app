import React from "react";
import { styles } from './styles'
import { View, Text } from "react-native";
import { ImageSelector } from "../../components";


const onImagePicker = (uri) => {
    console.warn("uri", uri)
}

const CameraScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sacale una foto a tu vino y etiquetanos!</Text>
            <ImageSelector onImagePicker={ onImagePicker}></ImageSelector>
        </View>
    )
}

export default CameraScreen;