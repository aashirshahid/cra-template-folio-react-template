import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addItem } from "Service/storage-service";
import APP_CONSTANTS from "Constants/app-constants";
import "./styles.css";
import { Header } from "Layout/header";
import { loginSchemaValidator } from "Helpers/auth-validator";
import { useHistory } from "react-router-dom";
import { signin } from "Service/auth";
import { LoginFormFields } from "Constants/forms";
import { FormController } from "Common/controls";
import { translation } from "Helpers/i8n-helper";

function Login() {
  const t = translation("auth");
  const history = useHistory();
  const formOptions = { resolver: yupResolver(loginSchemaValidator) };
  const { register, handleSubmit, formState } = useForm(formOptions);

  const login = (data) => {
    addItem(APP_CONSTANTS.ACCESS_TOKEN, "TEST_TOKEN");
    //location.reload();
    signin(data);
    history.push('/dashboard')
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(login)}>
      <Header>
        <span>{t("login")} It's working</span>
      </Header>
      {React.Children.toArray(
        LoginFormFields.map((item) => {
          return (
            <FormController
              {...item}
              formState={formState}
              register={register}
              {...(item.options && {
                options: item.options,
              })}
            />
          );
        })
      )}
      <input type="submit" />
    </form>
  );
}

export default Login;
