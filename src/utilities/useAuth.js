import React, { useContext, useState, createContext } from "react";
import axios from "axios";

const Context = createContext({});

export const AuthProvider = props => {
  const login = async (user, callback) => {
    const res = await axios.post(
      "https://login-test-dga.herokuapp.com/login",
      user
    );

    if (res.data.response) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("password", user.password);
      callback();
    }
  };

  const logout = callback => {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    callback();
  };

  return (
    <Context.Provider value={{ login, logout }}>
      {props.children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
