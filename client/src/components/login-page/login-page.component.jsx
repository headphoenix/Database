import FormInput from "components/form-input/form-input.component";
import { useEffect, useState, useContext } from "react";
import "./login-page.styles.scss";
import "../form-input/form-input.style.scss";
import axios from "axios";
import Button from "../button/button.component.jsx";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/authentication/authentication.context";

const defaultFormField = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const [error, setError] = useState("");
  const { user, setUser } = useContext(AuthContext)


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/user/login", { email, password });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      setUser(response.data)
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError("Invalid Email or Password");
    }
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
            {error && <div className="error-message">{error}</div>}
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
