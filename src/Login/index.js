// @vendors
import React from "react";
import { Formik } from "formik";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Wrapper } from "./styles";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../utilities/useAuth";

export default () => {
  const auth = useAuth();

  const history = useHistory();
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={fields => {
          auth.login(fields, () => history.push("/"));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Contreseña</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </FormGroup>
            <Button color="primary">Iniciar sesión</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
