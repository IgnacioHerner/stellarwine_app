const formatEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const minPasswordLength = 7;

export const validateInput = (name, value) => {
    let hasError = false;
    let error =  '';

    switch(name){
        case 'email':
            if (value.trim() == ''){
                hasError = true;
                error = 'Es requerido el email'
            } else if (!formatEmail.test(value)){
                hasError = true;
                error = 'El email es invalido'
            } else {
                hasError = false;
                error = '';
            }
            break
        case 'password':
            if (value.trim() == ''){
                hasError = true;
                error = 'Es requerido la contraseña';
            } else if (value.length < minPasswordLength) {
                hasError = true;
                error = `La contraseña debe tener al menos ${minPasswordLength} caracteres`;
            } else {
                hasError = false;
                error = ''
            }
            break
        default: break;
    }

    return { hasError, error};
}

export const onInputChange = (name, value, dispatch, formState) => {
    const { hasError, error} = validateInput(name, value)
    let isFormValid = true;
    
    for(const key in formState){
        const item = formState[key];
        if(key !== name && item.hasError){
            isFormValid = false;
            break
        } else if (key !== name && item.hasError){
            isFormValid = false;
            break;
        }
    }

    dispatch({
        type: UPDATED_FORM,
        data: {
            name,
            value,
            hasError,
            error,
            touched: true,
            isFormValid,
        }
    })
}

export const UPDATED_FORM = 'UPDATED_FOMR';