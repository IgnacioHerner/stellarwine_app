import React, {useState , useReducer} from "react";
import { View, Text, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme/colors";
import { useDispatch } from "react-redux";
import { isAndroid } from "../../utils/functions";
import { styles } from "./styles";
import { signUp, signIn } from "../../store/actions";
import { Input } from "../../components";
import { onInputChange, UPDATED_FORM } from "../../utils/form";


const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
}

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATED_FORM:
            const {name, value, hasError, error,touched,isFormValid} = action.data;
            return{
                ...state,
                [name] : {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched
                },
                isFormValid
            }
            default: 
                return state;
    }
}

const Auth = ({ navigation }) => {

    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true)
    const title = isLogin ? 'Entrar' : 'Registro';
    const message = isLogin ? 'No tienes una cuenta? ' : 'Tienes una cuenta?';
    const messageAction = isLogin ? 'Entrar' : 'Registrarse';

    const onHandleSubmit = () => {
        dispatch(isLogin ? signIn(formState.email.value, formState.password.value) : signUp(formState.email.value, formState.password.value))
    }

    const onHandleChangeInput = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState);
    }

    return (
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior={isAndroid ? 'height' : 'padding'} enabled>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input
                    label="Email"
                    placeholder='Escribe tu email'
                    placeholderTextColor={COLORS.gray}
                    keyboardType='email-address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={formState.email.value}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                    onChangeText={(text) => onHandleChangeInput(text, 'email')}
                />
                <Input
                    label= "Password"
                    placeholder='Escribe tu contrase??a'
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={formState.password.value}
                    hasError={formState.password.hasError}
                    error={formState.password.error}
                    touched={formState.password.touched}
                    onChangeText={(text) => onHandleChangeInput(text, 'password')}
                />
                <Button 
                    title={messageAction}
                    color={COLORS.primary}
                    onPress={onHandleSubmit}
                    disabled={!formState.isFormValid}
                />
                <View style={styles.prompt}>
                    <TouchableOpacity 
                        style={styles.propmtButton}
                        onPress={() => setIsLogin(!isLogin)}
                    >
                        <Text style={styles.promptMessage}>{message}</Text>
                    </TouchableOpacity>

                </View> 
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;