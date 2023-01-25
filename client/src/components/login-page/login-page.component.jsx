import FormInput from "components/form-input/form-input.component";
import { useEffect, useState } from "react";
import "./login-page.styles.scss";
import "../form-input/form-input.style.scss";
import Button from "../button/button.component.jsx";

const defaultFormField = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const resetFormField = () => {
    setFormField(defaultFormField);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    resetFormField();
  };

  return (
    <div className="login-container">
      <div className="box">
        <div className="text">
          <h2>Qodesh Database System</h2>
        </div>
        <div className="input-container">
          <form onSubmit={submitHandler}>
            <FormInput
              label="Email"
              inputOptions={{
                type: "email",
                name: "email",
                required: true,
                onChange: handleChange,
                value: email,
              }}
            />

            <FormInput
              label="Password"
              inputOptions={{
                type: "password",
                name: "password",
                required: true,
                onChange: handleChange,
                value: password,
              }}
            />
            <div className="buttons-container">
              <Button buttonType="login" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
