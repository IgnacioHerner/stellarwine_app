import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundlight,
    },
    containerList: {
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontFamily: 'OpenSans-Bold',
        paddingLeft: 55,
        borderBottomWidth: 1, 
    },
    title2: {
        fontSize: 18,
        paddingLeft: 70,
        fontFamily: 'OpenSans-Regular',
    }
})