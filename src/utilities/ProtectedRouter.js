import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./useAuth";

export default ({ children, path = "/Login" }) => {
  const auth = useAuth();

  return (
    <Route>{auth.isAuthenticated ? children : <Redirect to={path} />}</Route>
  );
};
