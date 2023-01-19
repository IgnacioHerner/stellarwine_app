import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 160,
    },
    contentContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, 
    },
    title: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold',
        color: COLORS.text
    },
})