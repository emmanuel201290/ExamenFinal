import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";
import { Formik } from "formik";
import "./style.css";
import { useAuth } from "../utilities/useAuth";
import { useHistory } from "react-router-dom";

const Principal = styled.div`
  background: #f08080;
  height: 100%;
  border-radius: 17px 17px 17px 17px;
`;

export default ({ titulo, contenido, nextCount }) => {
  const [isEmpty, setEmpty] = useState();
  const [isIndice, setIndice] = useState(1);
  const [isSelectValue, setSelectValue] = useState([]);
  const [isTemporal, setTemporal] = useState();

  const auth = useAuth();
  const history = useHistory();

  const handleSelected = e => {
    if (isIndice <= 5) {
      setEmpty(e.target.value);
      setTemporal(e.target.options[e.target.selectedIndex].text);
    }
  };

  const validEmpty = () => {
    if (isEmpty || isEmpty === false) {
      setSelectValue(prevState => [
        ...prevState,
        { item: isTemporal, titulo: titulo }
      ]);

      setIndice(isIndice + 1);
      nextCount(isIndice);
    }
    console.log(isIndice);
    if (isIndice === 5 && (isEmpty || isEmpty === false)) {
      auth.finishForm(true);
    }

    if (auth.isFinish) {
      auth.questionSave(isSelectValue);
      auth.questionLoad();
      auth.finishForm(false);
    }
  };

  return (
    <Principal>
      <div className="contenedor">
        <Formik
          initialValues={{ opcionText: "" }}
          onSubmit={(values, actions) => {
            validEmpty(() => actions.setSubmitting(false));
            auth.callResult();
            setEmpty("");
            actions.resetForm({ opcionText: "" });
          }}
          className="form-style"
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit} className="style-Form">
              <FormGroup>
                <Label htmlFor="titulo" className="style-Label">
                  {titulo}
                </Label>
                <Input
                  id={"1"}
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

              {!auth.isFinish ? (
                <Button
                  color="primary"
                  className="btn-style"
                  disabled={isSubmitting}
                >
                  Siguiente
                </Button>
              ) : (
                <Button color="primary" className="btn-style">
                  Finalizar
                </Button>
              )}

              {isEmpty === "" && !auth.isFinish ? (
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
