
export const Regex = {
    //The generic regex should be added here like phone regex should not a screen-specific so you can add here like.
    //phoneRegex:/^/,
    auth:{
        passwordRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/,
        dateRegex: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/
    }
}

export const validatorsValue = {
    //The generic validator should be added here like phone validator should not a screen-specific so you can add here like.
    //phoneLength:20,
    auth:{
        minPasswordLength: 8,
        maxPasswordLength: 50,
    }
}