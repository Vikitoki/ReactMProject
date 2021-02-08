import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

import "./auth-style.scss";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class AuthForm extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Введите корректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  onSubmitForm = (event) => {
    event.preventDefault();
  };

  onLoginIn = () => {};
  onRegistration = () => {};

  onChangeHandler = (event, controlName) => {
    console.log(`${controlName} ---- ${event.target.value}`);

    const formControls = { ...this.state.formControls },
      control = formControls[controlName];

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({ formControls, isFormValid });
  };

  validateControl = (value, validation) => {
    if (!validation) {
      return;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.email) {
      isValid = validateEmail(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length > validation.minLength && isValid;
    }

    return isValid;
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Input
          key={index}
          type={control.type}
          errorMessage={control.errorMessage}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          onChange={() => {
            this.onChangeHandler(event, controlName);
          }}
        />
      );
    });
  };

  render() {
    return (
      <div className="auth">
        <div className="auth__title">Войдите в свой личный кабинет</div>
        <div className="auth__content">
          <form className="auth__form form-auth" onSubmit={this.onSubmitForm}>
            <div className="form-auth__items">{this.renderInputs()}</div>
            <div className="form-auth__btns">
              <Button
                onClick={this.onLoginIn}
                type="primary"
                className="form-auth__btn"
                disabled={!this.state.isFormValid}
              >
                Войти
              </Button>
              <Button
                onClick={this.onRegistration}
                type="succes"
                className="form-auth__btn"
                disabled={!this.state.isFormValid}
              >
                Регистрация
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
