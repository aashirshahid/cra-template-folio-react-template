import * as yup from "yup";

import { Regex, validatorsValue } from "Constants/validators";
import { translation } from "Helpers/i8n-helper";
const authValidators = { ...Regex.auth, ...validatorsValue.auth };
const authFieldT = translation("auth");
const authValidatorT = translation("validators.auth");
const emailValidator = {
  email: yup
    .string()
    .email(`${authValidatorT("emailFormat")}`)
    .required(`${authValidatorT("email")}`),
};
const passwordValidator = {
  password: yup
    .string()
    .min(
      authValidators.minPasswordLength,
      `${authFieldT("password")}${authValidatorT("minPasswordLength")}`
    )
    .max(
      authValidators.maxPasswordLength,
      `${authFieldT("password")}${authValidatorT("maxPasswordLength")}`
    )
    .required(`${authFieldT("password")}${authValidatorT("password")}`)
    .matches(
      authValidators.passwordRegex,
      `${authFieldT("password")}${authValidatorT("passwordRegex")}`
    ),
};

export const loginSchemaValidator = yup.object().shape({
  ...emailValidator,
  ...passwordValidator,
});
export const signupSchemaValidator = yup.object().shape({
  ...emailValidator,
  firstName: yup.string().required(`${authValidatorT("firstName")}`),
  lastName: yup.string().required(`${authValidatorT("lastName")}`),
  role: yup.string().required(`${authValidatorT("role")}`),
  dob: yup
    .string()
    .required(`${authValidatorT("dob")}`)
    .matches(authValidators.dateRegex, `${authValidatorT("passwordRegex")}`),
  acceptTerms: yup.bool().oneOf([true], `${authValidatorT("acceptTerms")}`),
  ...passwordValidator,
  confirmPassword: yup
    .string()
    .min(
      authValidators.minPasswordLength,
      `${authFieldT("confirmPassword")}${authValidatorT("minPasswordLength")}`
    )
    .max(
      authValidators.maxPasswordLength,
      `${authFieldT("confirmPassword")}${authValidatorT("maxPasswordLength")}`
    )
    .required(`${authFieldT("confirmPassword")}${authValidatorT("password")}`)
    .oneOf([yup.ref("password"), null], `${authValidatorT("passwordMatch")}`),
});
