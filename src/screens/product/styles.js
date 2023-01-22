import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.primarylight
    },
    price: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    },
    description: {
        borderWidth: 1,
        borderColor: COLORS.primarylight,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.backgroundlight,

    },
    btnContainer: {
        paddingTop: 10,
    }
    
})