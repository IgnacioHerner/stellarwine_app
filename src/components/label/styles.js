import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    label: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        marginVertical: 5,
        color: COLORS.primary
    },
    subLabel: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
        marginVertical: 5,
        color: COLORS.primary
    },
})