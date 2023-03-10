import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: COLORS.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        minHeight: 320,
    },
    title: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        marginVertical: 5,
        textAlign: 'center',
    },
    label: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        marginVertical: 5,
    },
    input: {
        height: 45,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'OpenSans-Regular',
        marginBottom: 10
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 10,
    },
    propmtButton: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
    },
    promptMessage: {
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        color: COLORS.primary
    },
})