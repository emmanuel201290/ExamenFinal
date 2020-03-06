import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Formik } from "formik";
import "./style.css";
import { useAuth } from "../utilities/useAuth";

const Principal = styled.div`
  background: #f08080;
  height: 100%;
  border-radius: 17px 17px 17px 17px;
`;

export default ({ titulo, contenido, nextCount }) => {
  const [isEmpty, setEmpty] = useState();
  const [isIndice, setIndice] = useState(1);

  const auth = useAuth();
  const handleSelected = e => {
    setEmpty(e.target.value);
  };

  const validEmpty = () => {
    if (isEmpty || isEmpty === false) {
      if (isIndice < 5) {
        setIndice(isIndice + 1);
        nextCount(isIndice);
        auth.finishForm(false);
      } else {
        auth.finishForm(true);
      }
    }
  };

  return (
    <Principal>
      {}
      <div className="contenedor">
        <Formik
          initialValues={{ opcionText: "" }}
          onSubmit={validEmpty}
          className="form-style"
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="style-Form">
              <FormGroup>
                <Label htmlFor="titulo" className="style-Label">
                  {titulo}
                </Label>
                <Input
                  id={isIndice}
                  type="select"
                  name="opcionText"
                  value={values.opcionText}
                  onChange={handleChange}
                  onClick={handleSelected}
                >
                  {contenido.map(item => (
                    <option value={item.esVerdadera} select="selected">
                      {item.nombreOpcion}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              {isIndice <= 4 ? (
                <Button color="primary" className="btn-style">
                  Siguiente
                </Button>
              ) : (
                <Button color="primary" className="btn-style">
                  Finalizar
                </Button>
              )}

              {isEmpty === "" ? (
                <Label style={{ color: "red" }}>
                  <h5>{"Seleccione un valor"}</h5>
                </Label>
              ) : (
                ""
              )}

              {auth.isFinish ? (
                <Label style={{ color: "#0A2FB7" }}>
                  <h5>{"Formulario Finalizado"}</h5>
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
