import { StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        marginTop: StatusBar.currentHeight 
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        color: COLORS.text
    },
    containerList: {
        flex: 1,
    }
})