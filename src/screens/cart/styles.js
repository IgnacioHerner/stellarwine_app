import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    footer: {
        backgroundColor: COLORS.white,
        borderTopWidth: 1,
        borderTopColor: COLORS.primary,
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    buttonConfirm: {
        backgroundColor: COLORS.primarylight,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonDisabledConfirm : {
        backgroundColor: COLORS.gray,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular'
    },
    totalContainer: {
        flex: 0.4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textTotalTitle: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
    },
    textTotal: {
        fontSize: 16,
        fontFamily: 'OpenSans-Bold'
    },
    
})