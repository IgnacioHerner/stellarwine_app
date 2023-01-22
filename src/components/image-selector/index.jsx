import React, {useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import { styles } from "./styles";
import { View, Image, Text, Alert, Button } from 'react-native';
import { COLORS } from "../../constants/theme/colors";


const ImageSelector = ({onImagePicker}) => {
    
    const [pickedUrl, setPickedUrl] = useState(null)

    const onHandleTakeImage = async () => {
        const isCameraPermissions = await verifyPermissions();
        if(!isCameraPermissions) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: 0.7,

        })

        setPickedUrl(image.uri);
        onImagePicker(image.uri)
    }

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if(status !== "granted") {
            Alert.alert(
                "Permisos insuficientes",
                "Necesitas dar permisos para usar la camara", [{text: "Ok"}]
            )
            return false;
        }
        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.title}>No hay imagen seleccionada</Text>
                ) : (
                    <Image style={styles.image} source={{uri: pickedUrl}} />
                )}
            </View>
            <Button 
                title="Tomar foto"
                onPress={onHandleTakeImage}
                color={COLORS.primary}
            />
        </View>
    )
}

export default ImageSelector;