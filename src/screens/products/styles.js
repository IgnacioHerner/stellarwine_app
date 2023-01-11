import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        color: COLORS.text
    }
})