import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        height: 120,
    },
    item: {
        flex: 1,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 16,
        color: COLORS.text
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 100,
    },
    price: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: COLORS.text,
    },
    weight: {
        fontFamily: 'OpenSans-Italic',
        fontSize: 14,
        color: COLORS.text,
    },
})