import React, { useContext, useState, createContext } from "react";
import axios from "axios";
import validarSesion from "./validarSesion";
import { useHistory } from "react-router-dom";

const Context = createContext({});

export const AuthProvider = props => {
  const history = useHistory();
  const sesion = validarSesion();
  const [isAuthenticated, setIsAuthenticated] = useState(sesion);
  const [isFinish, setIsFinish] = useState(false);
  const [isResult, setIsResult] = useState([]);

  const login = async (user, callback) => {
    const res = await axios.post(
      "https://login-test-dga.herokuapp.com/login",
      user
    );

    if (res.data.response) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("password", user.password);
      setIsAuthenticated(true);
      callback();
    }
  };

  const callResult = () => {
    if (isFinish === true) {
      history.push("/Resultado");
    }
  };

  const logout = callback => {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    setIsAuthenticated(false);
    history.push("/Login");
  };

  const finishForm = valor => {
    setIsFinish(valor);
  };

  const questionSave = currentResult => {
    let results = [];
    results.push(currentResult);
    const serializedResult = JSON.stringify(currentResult);
    localStorage.setItem("information", serializedResult);
  };
  const questionLoad = () => {
    const serializedResult = localStorage.getItem("information");
    setIsResult(JSON.parse(serializedResult));
  };

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        isFinish,
        finishForm,
        isResult,
        questionSave,
        questionLoad,
        callResult
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
