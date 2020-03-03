// @vendors
import React from "react";
import { Formik } from "formik";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Wrapper } from "./styles";

export default () => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={fields => {
          console.log("");
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
