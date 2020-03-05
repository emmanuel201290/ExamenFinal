import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Formik } from "formik";
import "./style.css";

const Principal = styled.div`
  background: #f08080;
  height: 100%;
  border-radius: 17px 17px 17px 17px;
`;

export default ({ titulo, contenido, indice }) => {
  const [isSelected, setSelected] = useState();
  const [isEmpty, setEmpty] = useState(false);

  const handleSelected = e => {
    setSelected(e.target.value);
  };

  const validEmpty = () => {
    setEmpty(isSelected);
  };

  return (
    <Principal>
      <div className="contenedor">
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={validEmpty}
          className="form-style"
        >
          {({ values, handleChange, handleSubmit, errors }) => (
            <Form onSubmit={handleSubmit} className="style-Form">
              <FormGroup>
                <Label htmlFor="username" className="style-Label">
                  {titulo}
                </Label>
                <Input
                  id="username"
                  type="select"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onClick={handleSelected}
                >
                  {contenido.opciones.map(item => (
                    <option value={item.esVerdadera} selected="selected">
                      {item.nombreOpcion}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <Button color="primary" className="btn-style">
                Siguiente
              </Button>
              {isEmpty === "" ? (
                <Label style={{ color: "red" }}>
                  <h5>{"Seleccione un valor"}</h5>
                </Label>
              ) : (
                ""
              )}
            </Form>
          )}
        </Formik>
      </div>
    </Principal>
  );
};
