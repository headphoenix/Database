import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const navigate = useNavigate()


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:5001/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    };
    getUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5001/user/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setUser(response.data);
    } catch (error) {
      console.error(error);
      // Show an error message to the user
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthenticationContextProvider };